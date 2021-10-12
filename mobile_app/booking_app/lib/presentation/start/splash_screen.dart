import 'package:booking_app/presentation/app/colors.dart';
import 'package:flutter/material.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    Future.delayed(Duration(seconds: 6), () {
      Navigator.of(context).pushReplacementNamed("/dashboard");
    });
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          color: primaryColor,
        ),
        child: Center(
          child: Text(
            "Bookme.com",
            style: TextStyle(
              color: white,
              fontSize: 28,
              fontFamily: 'OpenSans-bold',
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
    );
  }
}
