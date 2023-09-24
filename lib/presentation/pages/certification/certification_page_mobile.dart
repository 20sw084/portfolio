import 'package:flutter/material.dart';
import 'package:my_portfolio/core/layout/adaptive.dart';
import 'package:my_portfolio/presentation/pages/certification/certification_page.dart';
import 'package:my_portfolio/presentation/widgets/app_drawer.dart';
import 'package:my_portfolio/presentation/widgets/content_wrapper.dart';
import 'package:my_portfolio/presentation/widgets/custom_app_bar.dart';
import 'package:my_portfolio/presentation/widgets/portfolio_card.dart';
import 'package:my_portfolio/presentation/widgets/spaces.dart';
import 'package:my_portfolio/values/values.dart';

class CertificationPageMobile extends StatefulWidget {
  const CertificationPageMobile({super.key});

  @override
  _CertificationPageMobileState createState() =>
      _CertificationPageMobileState();
}

class _CertificationPageMobileState extends State<CertificationPageMobile>
    with SingleTickerProviderStateMixin {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey();
  late AnimationController _certificationController;

  @override
  void initState() {
    _certificationController = AnimationController(
      duration: const Duration(milliseconds: 1200),
      vsync: this,
    );
    _playPortfolioAnimation();
    super.initState();
  }

  Future<void> _playPortfolioAnimation() async {
    try {
      await _certificationController.forward().orCancel;
    } on TickerCanceled {
      // the animation got canceled, probably because it was disposed of
    }
  }

  @override
  void dispose() {
    _certificationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(56.0),
        child: CustomAppBar(
          title: StringConst.CERTIFICATIONS,
          onLeadingPressed: () {
            if (_scaffoldKey.currentState!.isEndDrawerOpen) {
              _scaffoldKey.currentState!.openEndDrawer();
            } else {
              _scaffoldKey.currentState!.openDrawer();
            }
          },
        ),
      ),
      drawer: AppDrawer(
        menuList: Data.menuList,
        selectedItemRouteName: CertificationPage.certificationPageRoute,
      ),
      body: ContentWrapper(
        child: ListView.separated(
          padding: const EdgeInsets.symmetric(
            horizontal: Sizes.PADDING_24,
            vertical: Sizes.PADDING_16,
          ),
          itemCount: Data.certificationData.length,
          separatorBuilder: (BuildContext context, index) {
            return const SpaceH20();
          },
          itemBuilder: (BuildContext context, index) {
            // TODO: WFH to this commented mine code
            return PortfolioCard(
              imageUrl: Data.certificationData[index].image,
              // title: Data.certificationData[index].title,
              // subtitle: Data.certificationData[index].awardedBy,
              actionTitle: StringConst.VIEW,
              height: assignHeight(context: context, fraction: 0.35),
              width: widthOfScreen(context),
            );
          },
        ),
      ),
    );
  }
}
