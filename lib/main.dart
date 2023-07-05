import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import './src/app.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final InAppLocalhostServer localhostServer = InAppLocalhostServer(port: 1234);

  await localhostServer.start();

  runApp(const App());
}
