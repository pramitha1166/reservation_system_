import 'dart:ffi';

import 'package:booking_app/presentation/app/colors.dart';
import 'package:booking_app/presentation/home/attraction.dart';
import 'package:booking_app/presentation/home/carrantal.dart';
import 'package:booking_app/presentation/home/search_field.dart';
import 'package:booking_app/presentation/home/stays.dart';
import 'package:booking_app/presentation/home/taxi.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List mainServices = [
    {"title": "Stays", "icon": Icons.bed, "screen": const StaysScreen()},
    {
      "title": "Car rental",
      "icon": Icons.car_rental,
      "screen": const CarRentalScreen()
    },
    {"title": "Taxi", "icon": Icons.local_taxi, "screen": const TaxiScreen()},
    {
      "title": "Attractions",
      "icon": Icons.attractions,
      "screen": const AttractionScreen()
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: primaryColor,
        title: Text(
          "Bookme.com",
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        centerTitle: true,
        actions: [
          IconButton(
              onPressed: () {}, icon: Icon(Icons.chat_bubble_outline_sharp)),
          IconButton(onPressed: () {}, icon: Icon(Icons.notifications)),
        ],
        elevation: 0,
      ),
      body: Container(
        child: Column(
          children: [
            Container(
              padding: EdgeInsets.only(left: 10, right: 10, top: 5, bottom: 5),
              height: 80,
              width: MediaQuery.of(context).size.width,
              decoration: BoxDecoration(
                color: primaryColor,
              ),
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: List.generate(mainServices.length, (index) {
                    return Container(
                      height: 50,
                      width: 110,
                      padding: EdgeInsets.all(10),
                      margin: EdgeInsets.only(right: 10),
                      decoration: BoxDecoration(
                        color: white.withOpacity(0.1),
                        borderRadius: BorderRadius.circular(50),
                      ),
                      child: GestureDetector(
                        onTap: () {
                          print("csds");
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) =>
                                      mainServices[index]['screen']));
                        },
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              mainServices[index]['icon'],
                              color: white,
                            ),
                            SizedBox(
                              width: 5,
                            ),
                            Text(
                              mainServices[index]["title"],
                              style: TextStyle(color: white),
                            )
                          ],
                        ),
                      ),
                    );
                  }),
                ),
              ),
            ),
            getSearchSection(context),
          ],
        ),
      ),
    );
  }
}

Widget getSearchSection(BuildContext context) {
  double width = MediaQuery.of(context).size.width;
  return Padding(
    padding: EdgeInsets.all(10),
    child: Column(
      children: [
        getTextFieldSearchLocation(context),
        SizedBox(
          height: 5,
        ),
        getCalander(),
        SizedBox(
          height: 5,
        ),
        searchButton(context),
      ],
    ),
  );
}

Widget getTextFieldSearchLocation(BuildContext context) {
  return TextField(
    decoration: InputDecoration(
        hintText: "Search Location",
        border: OutlineInputBorder(borderSide: BorderSide(color: textBorder)),
        prefixIcon: Icon(
          Icons.search,
          color: inputTextColor,
        ),
        suffixIcon: IconButton(
          icon: Icon(
            Icons.mic,
            color: secondaryColor,
          ),
          onPressed: () {},
        ),
        focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(color: textBorder, width: 5)),
        enabledBorder: OutlineInputBorder(
            borderSide: BorderSide(color: textBorder, width: 5))),
    onTap: () {
      showSearch(context: context, delegate: LocationSearch());
    },
  );
}

Widget getCalander() {
  return (TextField(
    decoration: InputDecoration(
        hintText: "Select date range",
        border: OutlineInputBorder(borderSide: BorderSide(color: textBorder)),
        prefixIcon: Icon(
          Icons.calendar_view_week_rounded,
          color: inputTextColor,
        ),
        focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(color: textBorder, width: 5)),
        enabledBorder: OutlineInputBorder(
            borderSide: BorderSide(color: textBorder, width: 5))),
  ));
}

Widget searchButton(BuildContext context) {
  double width = MediaQuery.of(context).size.width;
  return GestureDetector(
    child: Container(
      width: width - 20,
      height: 60,
      decoration: BoxDecoration(
          color: secondaryColor,
          borderRadius: BorderRadius.all(Radius.circular(4)),
          border: Border.all(width: 5, color: textBorder)),
      child: Center(
        child: Text(
          "Search",
          style: TextStyle(color: white, fontWeight: FontWeight.bold),
        ),
      ),
    ),
  );
}
