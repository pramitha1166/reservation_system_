import 'package:booking_app/presentation/app/colors.dart';
import 'package:flutter/material.dart';

class StaysScreen extends StatefulWidget {
  const StaysScreen({Key? key}) : super(key: key);

  @override
  _StaysScreenState createState() => _StaysScreenState();
}

class _StaysScreenState extends State<StaysScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Stays"),
        backgroundColor: primaryColor,
      ),
      body: Center(
        child: Text("Stays"),
      ),
    );
  }
}
