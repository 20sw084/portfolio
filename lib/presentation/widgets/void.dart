import 'package:flutter/material.dart';
import 'package:my_portfolio/values/values.dart';

class Emptiness extends StatelessWidget {
  const Emptiness({super.key});

  @override
  Widget build(BuildContext context) {
    return const SizedBox(
      width: Sizes.WIDTH_0,
      height: Sizes.HEIGHT_30,
    );
  }
}
