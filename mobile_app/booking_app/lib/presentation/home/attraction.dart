import 'package:flutter/material.dart';

class AttractionScreen extends StatefulWidget {
  const AttractionScreen({Key? key}) : super(key: key);

  @override
  _AttractionScreenState createState() => _AttractionScreenState();
}

class _AttractionScreenState extends State<AttractionScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Stays"),
      ),
      body: Container(),
    );
  }
}
