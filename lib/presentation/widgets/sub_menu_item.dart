import 'package:flutter/material.dart';
import 'package:my_portfolio/presentation/widgets/spaces.dart';

// ignore: must_be_immutable
class SubMenuItem extends StatelessWidget {
  SubMenuItem({super.key,
    required this.title,
    this.isSelected = false,
    this.textStyle,
    this.color,
    this.thickness,
  });

  final String title;
  bool? isSelected;
  final Color? color;
  final double? thickness;
  final TextStyle? textStyle;

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);
    return IntrinsicHeight(
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          AnimatedOpacity(
            opacity: isSelected! ? 1 : 0.0,
            duration: const Duration(milliseconds: 300),
            child: VerticalDivider(
              color: color,
              thickness: thickness,
            ),
          ),
          isSelected! ? const SpaceW8() : Container(),
          Text(
            title,
            style: textStyle ?? theme.textTheme.titleLarge!.copyWith(),
          )
        ],
      ),
    );
  }
}
