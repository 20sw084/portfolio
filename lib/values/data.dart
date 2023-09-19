part of 'values.dart';

class MenuData {
  MenuData({
    required this.title,
    required this.routeName,
  });

  final String title;
  final String routeName;
}

class CertificationData {
  CertificationData({
    // required this.title,
    required this.image,
    required this.imageSize,
    // required this.url,
    // required this.awardedBy,
  });

  final String image;
  final double imageSize;
  // final String url;
  // final String title;
  // final String awardedBy;
}

class ProjectDetails {
  ProjectDetails({
    required this.projectImage,
    required this.projectName,
    required this.projectDescription,
    this.technologyUsed,
    this.isPublic,
    this.isLive,
    this.isOnPlayStore,
    this.playStoreUrl,
    this.webUrl,
    this.hasBeenReleased,
    this.gitHubUrl,
  });

  final String projectImage;
  final String projectName;
  final String projectDescription;
  final bool? isPublic;
  final bool? isOnPlayStore;
  final bool? isLive;
  final bool? hasBeenReleased;
  final String? playStoreUrl;
  final String? gitHubUrl;
  final String? webUrl;
  final String? technologyUsed;
}

class PortfolioData {
  PortfolioData({
    required this.title,
    required this.image,
    required this.imageSize,
    required this.subtitle,
    required this.portfolioDescription,
    this.technologyUsed,
    this.isPublic = false,
    this.isOnPlayStore = false,
    this.isLive = false,
    this.gitHubUrl = "",
    this.hasBeenReleased = true,
    this.playStoreUrl = "",
    this.webUrl = "",
  });

  final String image;
  final String portfolioDescription;
  final double imageSize;
  final String title;
  final String subtitle;
  final bool isPublic;
  final bool hasBeenReleased;
  final String gitHubUrl;
  final bool isOnPlayStore;
  final String playStoreUrl;
  final bool isLive;
  final String webUrl;
  final String? technologyUsed;
}

class ExperienceData {
  ExperienceData({
    required this.position,
    required this.roles,
    required this.location,
    required this.duration,
    this.company,
    this.companyUrl,
  });

  final String? company;
  final String? companyUrl;
  final String location;
  final String duration;
  final String position;
  final List<String> roles;
}

class SkillData {
  SkillData({
    required this.skillName,
    required this.skillLevel,
  });

  final String skillName;
  final double skillLevel;
}

class SubMenuData {
  SubMenuData({
    required this.title,
    this.isSelected,
    this.content,
    this.skillData,
    this.isAnimation = false,
  });

  final String title;
  final String? content;
  final List<SkillData>? skillData;
  bool isAnimation;
  bool? isSelected;
}

class Data {
  static List<MenuData> menuList = [
    MenuData(title: StringConst.HOME, routeName: HomePage.homePageRoute),
    MenuData(title: StringConst.ABOUT_ME, routeName: AboutPage.aboutPageRoute),
    MenuData(
      title: StringConst.PORTFOLIO,
      routeName: PortfolioPage.portfolioPageRoute,
    ),
//    MenuData(
//      title: StringConst.CONTACT,
//      routeName: ContactPage.contactPageRoute,
//    ),
    MenuData(
      title: StringConst.EXPERIENCE,
      routeName: ExperiencePage.experiencePageRoute,
    ),
    MenuData(title: StringConst.RESUME, routeName: StringConst.RESUME),
    MenuData(
      title: StringConst.CERTIFICATIONS,
      routeName: CertificationPage.certificationPageRoute,
    ),
  ];

  static List<SkillData> skillData = [
    SkillData(skillLevel: 99, skillName: StringConst.JAVA),
    SkillData(skillLevel: 95, skillName: StringConst.FLUTTER),
    SkillData(skillLevel: 90, skillName: StringConst.FIREBASE),
    SkillData(skillLevel: 85, skillName: StringConst.SQL),
    SkillData(skillLevel: 80, skillName: StringConst.CPP),
    SkillData(skillLevel: 70, skillName: StringConst.C),
    SkillData(skillLevel: 60, skillName: StringConst.ANDROID),
  ];

  static List<SubMenuData> subMenuData = [
    SubMenuData(
      title: StringConst.KEY_SKILLS,
      isSelected: true,
      isAnimation: true,
      skillData: skillData,
    ),
    SubMenuData(
      title: StringConst.EDUCATION,
      isSelected: false,
      content: StringConst.EDUCATION_TEXT,
    ),
  ];
  static List<PortfolioData> portfolioData = [
    PortfolioData(
      title: StringConst.DOC_APP,
      subtitle: StringConst.DOC_APP_SUBTITLE,
      image: ImagePath.DOC_APP,
      portfolioDescription: StringConst.DOC_APP_DETAIL,
      imageSize: 0.15,
      isPublic: true,
      technologyUsed: StringConst.FLUTTER,
      gitHubUrl: StringConst.DOC_APP_GITHUB_URL,
    ),
    PortfolioData(
      title: StringConst.FOOTBALL_APP,
      subtitle: StringConst.FOOTBALL_APP_SUBTITLE,
      image: ImagePath.FOOTBALL_APP,
      portfolioDescription: StringConst.FOOTBALL_APP_DETAIL,
      imageSize: 0.15,
      isPublic: true,
      isLive: true,
      technologyUsed: StringConst.FLUTTER,
      gitHubUrl: StringConst.FOOTBALL_APP_GITHUB_URL,
    ),
  ];

  static List<CertificationData> certificationData = [
    CertificationData(
      // title: StringConst.ASSOCIATE_ANDROID_DEV,
      // url: StringConst.ASSOCIATE_ANDROID_DEV_URL,
      image: ImagePath.CERT_1,
      imageSize: 0.30,
      // awardedBy: StringConst.GOOGLE,
    ),
    CertificationData(
      // title: StringConst.DATA_SCIENCE,
      // url: StringConst.DATA_SCIENCE_CERT_URL,
      image: ImagePath.CERT_2,
      imageSize: 0.30,
      // awardedBy: StringConst.UDACITY,
    ),
    CertificationData(
      // title: StringConst.DATA_SCIENCE,
      // url: StringConst.DATA_SCIENCE_CERT_URL,
      image: ImagePath.CERT_3,
      imageSize: 0.30,
      // awardedBy: StringConst.UDACITY,
    ),
    CertificationData(
      // title: StringConst.DATA_SCIENCE,
      // url: StringConst.DATA_SCIENCE_CERT_URL,
      image: ImagePath.CERT_4,
      imageSize: 0.30,
      // awardedBy: StringConst.UDACITY,
    ),
    CertificationData(
      // title: StringConst.DATA_SCIENCE,
      // url: StringConst.DATA_SCIENCE_CERT_URL,
      image: ImagePath.CERT_5,
      imageSize: 0.30,
      // awardedBy: StringConst.UDACITY,
    ),
    CertificationData(
      // title: StringConst.DATA_SCIENCE,
      // url: StringConst.DATA_SCIENCE_CERT_URL,
      image: ImagePath.CERT_6,
      imageSize: 0.30,
      // awardedBy: StringConst.UDACITY,
    ),
    CertificationData(
      // title: StringConst.DATA_SCIENCE,
      // url: StringConst.DATA_SCIENCE_CERT_URL,
      image: ImagePath.CERT_7,
      imageSize: 0.30,
      // awardedBy: StringConst.UDACITY,
    ),
    CertificationData(
      // title: StringConst.DATA_SCIENCE,
      // url: StringConst.DATA_SCIENCE_CERT_URL,
      image: ImagePath.CERT_8,
      imageSize: 0.30,
      // awardedBy: StringConst.UDACITY,
    ),
    CertificationData(
      // title: StringConst.DATA_SCIENCE,
      // url: StringConst.DATA_SCIENCE_CERT_URL,
      image: ImagePath.CERT_9,
      imageSize: 0.30,
      // awardedBy: StringConst.UDACITY,
    ),
  ];

  static List<ExperienceData> experienceData = [
    ExperienceData(
      company: StringConst.COMPANY_1,
      position: StringConst.POSITION_1,
      companyUrl: StringConst.COMPANY_1_URL,
      roles: [
        StringConst.COMPANY_1_ROLE_1,
        StringConst.COMPANY_1_ROLE_2,
        StringConst.COMPANY_1_ROLE_3,
      ],
      location: StringConst.LOCATION_1,
      duration: StringConst.DURATION_1,
    ),
    ExperienceData(
      company: StringConst.COMPANY_2,
      position: StringConst.POSITION_2,
      companyUrl: StringConst.COMPANY_2_URL,
      roles: [
        StringConst.COMPANY_2_ROLE_1,
        StringConst.COMPANY_2_ROLE_2,
        StringConst.COMPANY_2_ROLE_3,
        StringConst.COMPANY_2_ROLE_4,
      ],
      location: StringConst.LOCATION_2,
      duration: StringConst.DURATION_2,
    ),
  ];
}
