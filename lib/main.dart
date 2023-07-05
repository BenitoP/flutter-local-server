import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart' as shelf_io;
import './src/app.dart';

import 'package:flutter/services.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (Platform.isAndroid) {
    await AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);
  }

  var handler =
      const Pipeline().addMiddleware(logRequests()).addHandler(_echoRequest);

  var server = await shelf_io.serve(
    handler,
    '127.0.0.1',
    1234,
  );

  // Enable content compression
  server.autoCompress = true;

  print('Serving at http://${server.address.host}:${server.port}');
  runApp(const App());
}

Future<Response> _echoRequest(Request request) async {
  final String path = 'assets/game${request.requestedUri.path}';

  String file = request.url.pathSegments.last;

  return Response.ok(
    (await rootBundle.load(path)).buffer.asUint8List(),
    headers: {
      'Content-Type': contentType(file).toString(),
    },
  );
}

ContentType contentType(String filename) {
  if (filename.contains('.html'))
    return ContentType('text', 'html', charset: 'utf-8');
  if (filename.contains('.js'))
    return ContentType('application', 'javascript', charset: 'utf-8');
  if (filename.contains('.ico'))
    return ContentType('image', 'x-icon', charset: 'utf-8');

  return ContentType('text', 'html', charset: 'utf-8');
}
