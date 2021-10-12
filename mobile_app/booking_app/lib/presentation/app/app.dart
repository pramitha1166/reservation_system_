import 'package:booking_app/presentation/home/hime.dart';
import 'package:booking_app/presentation/start/login_screen.dart';
import 'package:booking_app/presentation/start/splash_screen.dart';
import 'package:flutter/material.dart';

class BookingApp extends StatefulWidget {
  const BookingApp({Key? key}) : super(key: key);

  @override
  _BookingAppState createState() => _BookingAppState();
}

class _BookingAppState extends State<BookingApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      routes: {
        '/': (context) => const SplashScreen(),
        '/login': (context) => const LoginScreen(),
        '/dashboard': (context) => const Home()
      },
    );
  }
}
