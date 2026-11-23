/**
 * ============================================================================
 * ROYAL VOWS - CENTRAL WEDDING CONFIGURATION (weddingConfig.js)
 * ============================================================================
 * 
 * Edit ALL wedding information, couple details, dates, event timings, venues,
 * wording, music, gallery images, and bilingual (English + Tamil) translations
 * exclusively inside this file.
 *
 * TABLE OF CONTENTS:
 *  1. BRIDE & GROOM DETAILS (Tamil + English)
 *  2. COUPLE INITIALS, MONOGRAM & HASHTAG
 *  3. MAIN INVITATION HEADINGS & DESCRIPTIONS
 *  4. FAMILY INVITATION WORDING & PARENTS
 *  5. WEDDING DATE, DAY & MUHURTHAM TIMINGS
 *  6. FLOWERING CEREMONY & ENGAGEMENT DETAILS
 *  7. ALL OTHER CEREMONY DETAILS (Muhurtham, Feast, Reception)
 *  8. VENUE NAME, ADDRESS & GOOGLE MAPS LINKS
 *  9. BILINGUAL TRANSLATIONS (English + Tamil UI Strings)
 * 10. CLOSING MESSAGES & FOOTER
 * 11. PHOTO GALLERY IMAGES & CAPTIONS
 * 12. BACKGROUND WEDDING MUSIC CONFIGURATION
 * ============================================================================
 */

export const weddingConfig = {
  // ==========================================================================
  // 1. BRIDE & GROOM DETAILS (Tamil + English)
  // ==========================================================================
  couple: {
    bride: {
      firstName: "Kaviya",
      lastName: "Dharshini",
      fullName: "Kavya Dharshini",
      tamilName: "காவ்ய தர்ஷினி",
      label: {
        en: "The Bride",
        ta: "மணமகள்"
      },
      parents: "D/o Thiru. M. Pandi & Thirumathi. T. S. Jeyalakshmi",
      tamilParents: "திரு. M. பாண்டி – திருமதி. T. S. ஜெயலட்சுமி தம்பதியரின் செல்வ மகள்",
      initial: "P",
      bio: "An architect with a passion for traditional arts, South Indian classical dance, and heritage design."
    },
    groom: {
      firstName: "Vishal",
      lastName: "Janeshwer",
      fullName: "Vishal Janeshwer",
      tamilName: "விஷால் ஜானேஷ்வர்",
      label: {
        en: "The Groom",
        ta: "மணமகன்"
      },
      parents: "S/o Thiru. T. N. M. D. Senthil kumar & Thirumathi. S. VijayaSaraswathi",
      tamilParents: "திரு. T. N. M. D. செந்தில் குமார் – திருமதி. S. விஜயசரஸ்வதி தம்பதியரின் செல்வ மகன்",
      initial: "S",
      bio: "A technology consultant, avid photographer, and connoisseur of Carnatic instrumental music."
    },

    // ========================================================================
    // 2. COUPLE INITIALS, MONOGRAM & HASHTAG
    // ========================================================================
    monogram: "V & K",
    initials: "V & K",
    hashtag: "#VishalWedsKaviya",
    tagline: {
      en: "Two hearts, one promise, a lifetime of togetherness.",
      ta: "இரு மனங்கள் இணையும் இனிய தருணம், வாழ்நாள் முழுமைக்குமான பந்தம்."
    }
  },

  // ==========================================================================
  // 3. MAIN INVITATION HEADINGS & DESCRIPTIONS
  // ==========================================================================
  invitationTexts: {
    // Divine Sacred Invocation at the top of the envelope and card
    blessingHeader: {
      en: "Shri kumarandavar thunai || Shri Pandisammi thunai",
      ta: "ஸ்ரீ குமராண்டவர் துணை || ஶ்ரீ பாண்டிசாமி துணை"
    },
    // Envelope Opening Screen Headings
    envelopeTitle: {
      en: "A Celebration of Love",
      ta: "அன்பின் அழகிய தொடக்கம்"
    },
    envelopeSubtitle: {
      en: "Wedding Invitation",
      ta: "திருமண அழைப்பிதழ்"
    },
    envelopeTapToOpen: {
      en: "Touch the seal to open",
      ta: "அழைப்பிதழைத் திறக்க தொடவும்"
    },
    // Traditional Card Section Headings
    cardSectionBadge: {
      en: "Traditional Wedding Invitation",
      ta: "பாரம்பரிய சுப திருமண அழைப்பிதழ்"
    },
    cardSectionHeading: {
      en: "The Sacred Union",
      ta: "மங்கள அழைப்பிதழ்"
    },

    // ========================================================================
    // 4. FAMILY INVITATION WORDING & PARENTS
    // ========================================================================
    familyAnnouncement: {
      en: "Together with our families",
      ta: "பெற்றோர் மற்றும் பெரியோர்களின் ஆசிகளுடன்"
    },
    invitationBody: {
      en: "With the divine grace of the Almighty and the heartfelt blessings of our elders and ancestors, we cordially invite you and your family to grace the auspicious wedding ceremony of our children, and bestow your cherished blessings upon the newly wedded couple.",
      ta: "இறையருளுடனும், பெரியோர்களின் நல்லாசியுடனும் நடைபெறவிருக்கும் எங்கள் செல்வ மகள் மற்றும் செல்வ மகனின் சுப திருமண மங்கள விழாவில், தாங்களும் தங்கள் குடும்பத்தினரும் வருகை தந்து, மணமக்களை வாழ்த்தி அருள அன்புடன் அழைக்கின்றோம்."
    },
    closingNote: {
      en: "Your presence, warm prayers, and blessings are the greatest gifts we treasure as we step into this sacred chapter of life.",
      ta: "தங்களின் வருகையும், உளமார்ந்த நல்வாழ்த்துகளுமே எங்களுக்குக் கிட்டும் மிகப்பெரிய பேறாகும்."
    }
  },

  // ==========================================================================
  // 5. WEDDING DATE, DAY & MUHURTHAM TIMINGS
  // ==========================================================================
  date: {
    year: 2027,
    month: 3,
    monthName: "March",
    monthNameTamil: "மாசி",
    tamilDayOfMonth: "19-ஆம் நாள்",
    day: 12,
    dayOfWeek: "Friday",
    dayOfWeekTamil: "வெள்ளிக்கிழமை",
    fullDateString: "2027-03-12T10:30:00",
    muhurthamHeading: {
      en: "The Sacred Muhurtham Day",
      ta: "சுப முகூர்த்த நன்னாள்"
    },
    saveDateHeading: {
      en: "Save Our Auspicious Date",
      ta: "சுப முகூர்த்த நாள் & நேரம்"
    },
    muhurthamTime: "05:30 AM - 7:00 AM",
    muhurthamLagnam: "Kumbha Lagnam (Brahma Muhurtham)",
    muhurthamTimeTamil: "விடியற்காலை 05:30 மணி முதல் 07:00 மணி வரை",
    muhurthamLagnamTamil: "கும்ப லக்னத்தில் (பிரம்ம முஹூர்த்தம்)",
    scratchPrompt: {
      en: "✦ SCRATCH GOLD FOIL TO REVEAL ✦",
      ta: "பொன் திரையை சுரண்டி சுப தினத்தை அறியவும்"
    }
  },

  // ==========================================================================
  // 6. FLOWERING CEREMONY & ENGAGEMENT DETAILS
  // 7. ALL OTHER CEREMONY DETAILS (Muhurtham, Feast, Reception)
  // ==========================================================================
  eventsHeading: {
    en: "Schedule of Auspicious Ceremonies",
    ta: "சுப நிகழ்வுகளின் விவரங்கள்"
  },
  eventsSubtitle: {
    en: "Join us in our traditional ceremonies filled with prayer, joy and festivity",
    ta: "மங்கள வாத்தியங்கள் மற்றும் பக்தி சிரத்தையுடன் நடைபெறும் நிகழ்வுகள்"
  },
  featuredEventLabel: {
    en: "Auspicious Muhurtham",
    ta: "புனித முகூர்த்தம்"
  },
  events: [
    {
      id: "flowering",
      name: "Flowering Ceremony",
      tamilName: "பூப்புனித நீராட்டு விழா",
      date: "Sunday, 29 December 2026",
      tamilDate: "ஞாயிறு, 29 டிசம்பர் 2026",
      time: "10:30 AM - 12:00 PM",
      tamilTime: "காலை 10:30 மணி முதல் 12:00 மணி வரை",
      venue: "SMKS MAHAL, Pattiverranpatti",
      tamilVenue: "SMKS மண்டபம், பட்டிவீரன்பட்டி",
      description: "Auspicious traditional turmeric and floral blessing ceremony with prayers and blessings from maternal uncles, elders, and family.",
      tamilDescription: "பெரியோர்கள் மற்றும் தாய்மாமன் ஆசிகளுடன், நலுங்கு வைத்து மங்கல மஞ்சள் நீராட்டி வாழ்த்தும் பாரம்பரிய மங்கள விழா.",
      icon: "flower",
      color: "from-amber-500 to-yellow-400"
    },
    {
      id: "nichayathartham",
      name: "Nichayathartham (Engagement)",
      tamilName: "நிச்சயதார்த்த வைபவம்",
      date: "Thursday, 18 February 2027",
      tamilDate: "வியாழக்கிழமை, 18 பிப்ரவரி 2027",
      time: "10:30 AM - 12:30 PM",
      tamilTime: "காலை 10:30 மணி முதல் 12:30 மணி வரை",
      venue: "Heritage Banquet Hall",
      tamilVenue: "பாரம்பரிய மங்கள அரங்கம்",
      description: "The traditional betrothal ceremony exchanging auspicious plates (Thamboolam) and solemn promises between the two families.",
      tamilDescription: "இரு குடும்பத்தாரும் கூடி தாம்பூலத் தட்டுகளை மாற்றி, பெரியோர்களின் முன்னிலையில் திருமணத்தை உறுதி செய்யும் மங்கள நிகழ்வு.",
      icon: "ring",
      color: "from-amber-600 to-yellow-500"
    },
    {
      id: "muhurtham",
      name: "Mangala Muhurtham",
      tamilName: "புனித மங்கள முஹூர்த்தம்",
      date: "Friday, 19 February 2027",
      tamilDate: "வெள்ளிக்கிழமை, 19 பிப்ரவரி 2027 (மாசி 7)",
      time: "04:30 AM - 06:00 AM",
      tamilTime: "விடியற்காலை 04:30 மணி முதல் 06:00 மணி வரை",
      venue: "Sri Raja Rajeshwari Mandapam (Main Sanctum)",
      tamilVenue: "ஸ்ரீ ராஜ ராஜேஸ்வரி மண்டப பிரதான மேடை",
      description: "The sacred Vedic rituals, Kanyadanam, Mangalya Dharanam (tying of the sacred Thirumangalyam), and Saptapadi around the Agni.",
      tamilDescription: "வேத மந்திரங்கள் முழங்க, கெட்டிமேளம் கொட்ட, அக்னி சாட்சியாக மாங்கல்ய தாரணம் செய்து வாழ்நாள் துணை ஏற்கும் மங்கள நிகழ்வு.",
      icon: "flame",
      color: "from-amber-700 to-yellow-600",
      featured: true
    },
    {
      id: "virundhu",
      name: "Traditional Kalyana Virundhu",
      tamilName: "பாரம்பரிய தலைவாழை விருந்து",
      date: "Friday, 19 February 2027",
      tamilDate: "வெள்ளிக்கிழமை, 19 பிப்ரவரி 2027",
      time: "11:30 AM - 03:00 PM",
      tamilTime: "மதியம் 11:30 மணி முதல் 03:00 மணி வரை",
      venue: "Annapoorna Royal Dining Hall",
      tamilVenue: "அன்னபூரணி ராஜ போஜன அரங்கம்",
      description: "Grand authentic South Indian feast served on fresh plantain leaves featuring over 24 traditional delicacies and payasam.",
      tamilDescription: "தலைவாழை இலையில் நெய் மணம் கமழும் அறுசுவை உணவு வகைகள் மற்றும் பாரம்பரிய பாயாசத்துடன் பரிமாறப்படும் மங்கள கல்யாண விருந்து.",
      icon: "utensils",
      color: "from-yellow-700 to-amber-600"
    },
    {
      id: "reception",
      name: "Wedding Reception",
      tamilName: "திருமண வரவேற்பு நிகழ்ச்சி",
      date: "Friday, 19 February 2027",
      tamilDate: "வெள்ளிக்கிழமை, 19 பிப்ரவரி 2027",
      time: "06:30 PM onwards",
      tamilTime: "மாலை 06:30 மணி முதல்",
      venue: "Royal Crystal Ballroom",
      tamilVenue: "ராயல் கிரிஸ்டல் அரங்கம்",
      description: "An evening of warm congratulations, photo sessions, fellowship, and lavish dinner to celebrate the newlyweds.",
      tamilDescription: "புதுமணத் தம்பதியினருக்கு வாழ்த்துகளைத் தெரிவித்து, நினைவுகளைப் பகிர்ந்து மகிழும் வண்ணமயமான வரவேற்பு மாலை.",
      icon: "sparkles",
      color: "from-amber-600 to-yellow-500"
    }
  ],

  // Traditional Kalyana Virundhu Feast Details
  feast: {
    heading: {
      en: "The Royal Wedding Feast",
      ta: "அறுசுவை தலைவாழை கல்யாண விருந்து"
    },
    subtitle: {
      en: "A culinary journey of traditional South Indian flavours served on auspicious plantain leaves.",
      ta: "அறுசுவை உணவு வகைகளுடன் தலைவாழை இலையில் பரிமாறப்படும் பாரம்பரிய தென்னிந்திய மங்கள விருந்து."
    },
    bannerTag: {
      en: "Authentic Plantain Leaf Feast",
      ta: "பாரம்பரிய தலைவாழை இலை விருந்து"
    },
    dateTimeBadge: {
      en: "19 February 2027 · 11:30 AM onwards",
      ta: "19 பிப்ரவரி 2027 · மதியம் 11:30 மணி முதல்"
    },
    invitationNote: {
      en: "In the cherished South Indian tradition, we invite you to join both our families for an elaborate wedding banquet served on fresh plantain leaves. Savor over two dozen fragrant vegetarian dishes, aromatic rice, sambar, crispy appalam, and rich festive payasam.",
      ta: "எங்கள் இரு குடும்பத்தாரின் நல்லிணக்கத்துடன், பாரம்பரிய தலைவாழை இலையில் நெய் மணம் கமழும் சாம்பார், அவியல், கூட்டு, பொரியல், மற்றும் இனிப்பு பாயாசத்துடன் கூடிய அறுசுவை திருமண விருந்தில் கலந்துகொண்டு மணமக்களை வாழ்த்த அன்போடு அழைக்கின்றோம்."
    },
    diningVenue: "Annapoorna Royal Dining Hall · Sri Raja Rajeshwari Thirumana Mandapam",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=85"
  },

  // Countdown Section Titles
  countdown: {
    badge: {
      en: "Approaching the Sacred Hour",
      ta: "மங்கல நேரம் நோக்கி..."
    },
    title: {
      en: "Counting Down to the Sacred Muhurtham",
      ta: "சுப முஹூர்த்தத்திற்கான மணித்துளிகள்"
    },
    todayCelebration: {
      en: "May the couple be blessed with eternal happiness, prosperity and unending love!",
      ta: "இறைவனின் அருளாலும் பெரியோர்களின் ஆசிகளாலும் புதுமண தம்பதியினர் மங்கல இல்வாழ்க்கையை துவங்குகின்றனர்!"
    }
  },

  // ==========================================================================
  // 8. VENUE NAME, ADDRESS & GOOGLE MAPS LINKS
  // ==========================================================================
  venue: {
    name: "SMKS Mahal",
    tamilName: "SMKS மண்டபம்",
    city: "Pattiverranpatti",
    state: "Tamil Nadu",
    pincode: "624211",
    landmark: "Opposite Kalnadai Maruthuvam",
    tamilFullAddress: "எண் 48, ஜி.எஸ்.டி சாலை, சானடோரியம் மெட்ரோ அருகில், குரோம்பேட்டை, சென்னை, தமிழ்நாடு - 600044",
    fullAddress: "SMKS Mahal, Pattiveeranpatti, Dindigul, Tamil Nadu 624211",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.623103389882!2d77.75761287479637!3d10.211230589905428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07501c5d10d877%3A0x74ecbff500f18bc8!2sSMKS%20mahal!5e0!3m2!1sen!2sin!4v1795451091300!5m2!1sen!2sin",
    googleMapsDirectionUrl: "https://maps.app.goo.gl/RXGnZjNPjAsBPyZT9",
    phone: "04543-267094",
    image: "https://lh3.googleusercontent.com/grass-cs/AABkmLfbmliyQ0r3_d5QfP8vsJkoiX91fkdce8WpmvKG3roxv8gicoQMuBfuvr3mkyLWXaY-fd3nPxWQZf_4Ki5mbDK97m9chwFf2OgdNVdxNSprClJarJoeBrTn5drJbisz93X4D9ZVPQ=w426-h240-k-no"
  },

  // ==========================================================================
  // 9. BILINGUAL TRANSLATIONS (English + Tamil UI Strings)
  // ==========================================================================
  translations: {
    en: {
      // Navigation
      navHome: "Home",
      navInvitation: "Invitation",
      navDate: "Auspicious Date",
      navEvents: "Events",
      navVenue: "Venue",
      navGallery: "Moments",
      navRsvp: "RSVP",
      
      // Envelope Opening
      envelopeTitle: "A Celebration of Love",
      envelopeSub: "Wedding Invitation",
      envelopeTapToOpen: "Touch the seal to open",
      openInvitation: "OPEN YOUR INVITATION",
      skipIntro: "Skip to Invitation",
      unfoldingCard: "Unfolding Royal Invitation...",
      
      // Hero
      togetherFamilies: "Together with our families",
      and: "&",
      tagline: "Two hearts, one promise, a lifetime of togetherness.",
      scrollExplore: "Scroll to explore",
      
      // Traditional Card
      blessingGanesha: "Shri kumarandavar thunai || Shri Pandisammi thunai",
      formalInvitationHeading: "Traditional Wedding Invitation",
      cordiallyInvite: "Cordially invite you to celebrate with us",
      parentsBride: "Daughter of Thiru. M. Pandi & Thirumathi. T. S. Jeyalakshmi",
      parentsGroom: "Son of Thiru. T. N. M. D. Senthil kumar & Thirumathi. S. VijayaSaraswathi",
      
      // Date & Scratch Card
      auspiciousDateTitle: "The Auspicious Date",
      scratchInstruction: "Gently scratch the golden foil using your finger or mouse to reveal the sacred wedding date",
      revealDateBtn: "Reveal Wedding Date",
      scratchedSuccess: "Auspicious Date Unveiled!",
      dayTitle: "DAY",
      monthTitle: "MONTH",
      yearTitle: "YEAR",
      muhurthamLabel: "Sacred Muhurtham",
      lagnamLabel: "Auspicious Lagnam",
      
      // Countdown
      countdownTitle: "Counting Down to the Sacred Muhurtham",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINUTES",
      seconds: "SECONDS",
      weddingToday: "Today is the Auspicious Wedding Day! Best wishes to the couple!",
      
      // Events
      eventsTitle: "Wedding Celebrations & Rituals",
      eventsSubtitle: "Join us in our traditional ceremonies filled with prayer, joy and festivity",
      viewOnMap: "Location Details",
      
      // Feast
      feastHeading: "Traditional Kalyana Virundhu",
      feastSubtitle: "A culinary journey of traditional South Indian flavours served on auspicious plantain leaves.",
      
      // Venue
      venueTitle: "Wedding Venue",
      venueSubtitle: "SMKS MAHAL, Pattiverranpatti",
      getDirections: "Get Directions (Google Maps)",
      copyAddress: "Copy Full Address",
      addressCopied: "Address Copied to Clipboard!",
      venueContact: "Venue Contact",
      
      // Gallery
      galleryTitle: "Cherished Moments",
      gallerySubtitle: "Glimpses of love, laughter, and timeless heritage",
      viewPhoto: "View Photo",
      closeGallery: "Close",
      
      // Music
      musicPlaying: "Music Playing",
      musicPaused: "Music Paused",
      toggleMusic: "Toggle Wedding Music",
      
      // RSVP
      rsvpTitle: "Confirm Your Gracious Presence",
      rsvpSubtitle: "Please let us know if you can join our celebration",
      fullName: "Guest Full Name",
      namePlaceholder: "Enter your full name",
      numberOfGuests: "Number of Guests",
      attendingStatus: "Will you be attending?",
      attendingYes: "Yes, joyfully accepting with family",
      attendingNo: "Regretfully unable to attend",
      wishes: "Warm Wishes & Blessings",
      wishesPlaceholder: "Share your blessings and advice for Kaviya & Karthik...",
      submitRsvp: "Send RSVP & Blessings",
      submitting: "Recording your response...",
      rsvpSuccessTitle: "Vanakkam & Thank You!",
      rsvpSuccessMsg: "Your RSVP has been lovingly received. We look forward to welcoming you with folded hands!",
      anotherRsvp: "Submit Another Response",
      rsvpDeadlineNote: "Please kindly RSVP before 10 February 2027",
      
      // Calendar
      addToCalendar: "Save to Calendar (.ICS)",
      googleCalendar: "Add to Google Calendar",
      
      // Closing
      closingTitle: "Your Presence Is Our Greatest Gift",
      closingSubtitle: "We eagerly look forward to welcoming you and celebrating this momentous milestone together.",
      replayInvitation: "Replay Invitation Opening",
      backToTop: "Back to Top",
      credits: "Crafted with love for Karthik & Kaviya",
    },
    
    ta: {
      // Navigation
      navHome: "முகப்பு",
      navInvitation: "அழைப்பிதழ்",
      navDate: "சுப முகூர்த்த நாள்",
      navEvents: "நிகழ்வுகள்",
      navVenue: "மண்டபம்",
      navGallery: "நினைவுகள்",
      navRsvp: "வருகை உறுதி",
      
      // Envelope Opening
      envelopeTitle: "அன்பின் அழகிய தொடக்கம்",
      envelopeSub: "மங்களகரமான தென்னிந்திய திருமண அழைப்பிதழ்",
      envelopeTapToOpen: "அழைப்பிதழைத் திறக்க தொடவும்",
      openInvitation: "அழைப்பிதழைத் திறக்கவும்",
      skipIntro: "நேரடி அழைப்பிதழ்",
      unfoldingCard: "அழைப்பிதழ் விரிகிறது...",
      
      // Hero
      togetherFamilies: "குடும்பத்தாரின் அன்புடனும் நல்லாசியுடனும்",
      and: "இணைந்து",
      tagline: "இரு மனங்கள் இணையும் இனிய தருணம், வாழ்நாள் முழுமைக்குமான பந்தம்.",
      scrollExplore: "தொடர்ந்து காண கீழ்நோக்கி நகர்த்தவும்",
      
      // Traditional Card
      blessingGanesha: "ஸ்ரீ குமராண்டவர் துணை || ஸ்ரீ பாண்டிசாமி துணை",
      formalInvitationHeading: "பாரம்பரிய சுப திருமண அழைப்பிதழ்",
      cordiallyInvite: "தாங்களும் தங்கள் குடும்பத்தினரும் வருகை தந்து சிறப்பிக்க அன்புடன் அழைக்கின்றோம்",
      parentsBride: "திரு. M. பாண்டி & திருமதி. T. S. ஜெயலக்ஷ்மி அவர்களின் அன்பு மகள்",
      parentsGroom: "திரு. T. N. M. D. செந்தில் குமார் & திருமதி. S. விஜயசரஸ்வதி அவர்களின் அன்பு மகன்",
      
      // Date & Scratch Card
      auspiciousDateTitle: "சுப திருமண நாள்",
      scratchInstruction: "பொன் திரையை விரல் அல்லது மவுஸ் கொண்டு சுரண்டி சுப தினத்தை அறியவும்",
      revealDateBtn: "சுப தினத்தை காணவும்",
      scratchedSuccess: "சுப முகூர்த்த நாள் வெளிப்பட்டது!",
      dayTitle: "தேதி",
      monthTitle: "மாதம்",
      yearTitle: "ஆண்டு",
      muhurthamLabel: "மங்கள முஹூர்த்த நேரம்",
      lagnamLabel: "சுப லக்னம்",
      
      // Countdown
      countdownTitle: "சுப முஹூர்த்தத்திற்கான மணித்துளிகள்",
      days: "நாட்கள்",
      hours: "மணிகள்",
      minutes: "நிமிடங்கள்",
      seconds: "வினாடிகள்",
      weddingToday: "இன்று எங்கள் மங்கள திருமண நன்னாள்! மணமக்களை வாழ்த்துங்கள்!",
      
      // Events
      eventsTitle: "திருமண மங்கள விழா நிகழ்வுகள்",
      eventsSubtitle: "மங்கள வாத்தியங்கள் மற்றும் பக்தி சிரத்தையுடன் நடைபெறும் நிகழ்வுகள்",
      viewOnMap: "அரங்க விவரங்கள்",
      
      // Feast
      feastHeading: "பாரம்பரிய தலைவாழை கல்யாண விருந்து",
      feastSubtitle: "அறுசுவை உணவு வகைகளுடன் தலைவாழை இலையில் பரிமாறப்படும் பாரம்பரிய தென்னிந்திய மங்கள விருந்து.",
      
      // Venue
      venueTitle: "திருமண மண்டபம்",
      venueSubtitle: "SMKS மண்டபம், Pattiverranpatti",
      getDirections: "வழித்தடம் பார்க்க (கூகிள் மேப்ஸ்)",
      copyAddress: "முகவரியை நகலெடுக்கவும்",
      addressCopied: "முகவரி வெற்றிகரமாக நகலெடுக்கப்பட்டது!",
      venueContact: "மண்டப தொடர்பு எண்",
      
      // Gallery
      galleryTitle: "அன்பின் நினைவுகள்",
      gallerySubtitle: "காதல், புன்னகை மற்றும் பாரம்பரியத்தின் அழகிய தருணங்கள்",
      viewPhoto: "புகைப்படத்தைப் பார்க்க",
      closeGallery: "மூடுக",
      
      // Music
      musicPlaying: "மங்கல இசை ஒலிக்கிறது",
      musicPaused: "இசை நிறுத்தப்பட்டுள்ளது",
      toggleMusic: "மங்கல இசையை இயக்க / நிறுத்த",
      
      // RSVP
      rsvpTitle: "தங்கள் மேலான வருகையை உறுதி செய்க",
      rsvpSubtitle: "எங்கள் இல்ல திருமண விழாவில் கலந்துகொள்ள அன்புடன் அழைக்கிறோம்",
      fullName: "விருந்தினர் பெயர்",
      namePlaceholder: "தங்கள் முழு பெயரை உள்ளிடவும்",
      numberOfGuests: "வருகை தரும் விருந்தினர்கள் எண்ணிக்கை",
      attendingStatus: "விழாவில் கலந்துகொள்வீர்களா?",
      attendingYes: "ஆம், குடும்பத்துடன் மகிழ்ச்சியாக வருகை தருகிறோம்",
      attendingNo: "மன்னிக்கவும், வர இயலாத நிலையில் உள்ளோம்",
      wishes: "மணமக்களுக்கான வாழ்த்துச் செய்தி",
      wishesPlaceholder: "கார்த்திக் & காவியா தம்பதியினருக்கு தங்கள் இதயப்பூர்வ வாழ்த்துக்கள்...",
      submitRsvp: "வருகையை உறுதி செய்து வாழ்த்துக",
      submitting: "பதிவு செய்யப்படுகிறது...",
      rsvpSuccessTitle: "வணக்கம் மற்றும் நெஞ்சார்ந்த நன்றிகள்!",
      rsvpSuccessMsg: "தங்கள் பதிவு அன்புடன் ஏற்றுக்கொள்ளப்பட்டது. தங்களை நேரில் வரவேற்கக் காத்திருக்கிறோம்!",
      anotherRsvp: "மற்றொரு பதிவைச் சேர்க்க",
      rsvpDeadlineNote: "தயவுசெய்து 10 பிப்ரவரி 2027 க்குள் உறுதிப்படுத்தவும்",
      
      // Calendar
      addToCalendar: "நாட்காட்டியில் குறிக்க (.ICS)",
      googleCalendar: "கூகிள் கேலெண்டரில் குறிக்க",
      
      // Closing
      closingTitle: "தங்கள் வருகையே எங்களுக்கு மகிழ்ச்சியும் பெருமையும்",
      closingSubtitle: "எங்கள் வாழ்வின் மிக முக்கிய தொடக்கத்திற்கு தாங்கள் வருகை தந்து வாழ்த்த வேண்டுகிறோம்.",
      replayInvitation: "அழைப்பிதழை மீண்டும் காண்க",
      backToTop: "மேலே செல்க",
      credits: "கார்த்திக் & காவியா திருமணத்திற்காக வடிவமைக்கப்பட்டது",
    }
  },

  // ==========================================================================
  // 10. CLOSING MESSAGES & FOOTER
  // ==========================================================================
  closing: {
    title: {
      en: "Your Presence Is Our Greatest Gift",
      ta: "தங்கள் வருகையே எங்களுக்கு மகிழ்ச்சியும் பெருமையும்"
    },
    subtitle: {
      en: "We eagerly look forward to welcoming you and celebrating this momentous milestone together.",
      ta: "எங்கள் வாழ்வின் மிக முக்கிய தொடக்கத்திற்கு தாங்கள் வருகை தந்து வாழ்த்த வேண்டுகிறோம்."
    },
    signatureLine: {
      en: "With Heartfelt Love & Gratitude",
      ta: "அன்புடன் அழைக்கும் மணமக்கள்"
    },
    calendarBoxTitle: {
      en: "Add to Your Calendar",
      ta: "நாட்காட்டியில் குறித்துக் கொள்ளவும்"
    },
    credits: {
      en: "Crafted with love for Karthik & Kaviya",
      ta: "கார்த்திக் & காவியா திருமணத்திற்காக வடிவமைக்கப்பட்டது"
    }
  },

  // ==========================================================================
  // 11. PHOTO GALLERY IMAGES & CAPTIONS
  // ==========================================================================
  gallery: [
    {
      id: 1,
      title: "Sacred Moments & Smiles",
      tamilTitle: "அன்பின் பொன்னான தருணம்",
      subtitle: "Pre-wedding portraits",
      tamilSubtitle: "திருமணத்திற்கு முந்தைய நினைவுகள்",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: 2,
      title: "Traditional South Indian Elegance",
      tamilTitle: "பாரம்பரிய பட்டு மங்களம்",
      subtitle: "Silk & Temple Gold",
      tamilSubtitle: "காஞ்சிப்பட்டு & கோவில் நகைகள்",
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: 3,
      title: "Gleam of Joy",
      tamilTitle: "மகிழ்ச்சியின் பிரகாசம்",
      subtitle: "Together in grace",
      tamilSubtitle: "அன்பால் இணைந்த உள்ளங்கள்",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: 4,
      title: "Auspicious Jasmine Garland",
      tamilTitle: "மணம் கமழும் மல்லிகை மாலை",
      subtitle: "Sacred vows & garlands",
      tamilSubtitle: "மங்கள மாலை மாற்றுதல்",
      url: "https://images.unsplash.com/photo-1545232979-fbf6786e680a?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: 5,
      title: "Cherished Togetherness",
      tamilTitle: "என்றும் இணைபிரியா உறவு",
      subtitle: "A lifetime of laughter",
      tamilSubtitle: "வாழ்நாள் முழுமைக்கான புன்னகை",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: 6,
      title: "Temple Heritage & Grace",
      tamilTitle: "கோவில் சிற்ப கலை அழகு",
      subtitle: "Timeless traditions",
      tamilSubtitle: "காலம் கடந்த கலாச்சாரம்",
      url: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=85"
    }
  ],

  // ==========================================================================
  // 12. BACKGROUND WEDDING MUSIC CONFIGURATION
  // ==========================================================================
  music: {
    title: "Traditional Wedding Instrumental",
    tamilTitle: "மங்கல திருமண பின்னணி இசை",
    // Replaceable local file stored in public/audio/
    // Supported formats: wedding-music.mp3, wedding-music.wav, wedding-music.m4a
    audioUrl: "audio/wedding-music.mp3",
    autoPlayPrompt: "Music will play softly upon opening invitation",
    tamilAutoPlayPrompt: "அழைப்பிதழைத் திறக்கும்போது மங்கல இசை ஒலிக்கும்"
  },

  // RSVP Form Configuration
  rsvp: {
    enabled: true,
    deadline: "10 February 2027",
    tamilDeadline: "10 பிப்ரவரி 2027 க்குள்",
    contactPerson: "Mr. R. Vignesh (Wedding Coordinator)",
    contactPhone: "+91 98401 23456",
    contactEmail: "vows.karthikkaviya@gmail.com",
    googleSheetsEndpoint: ""
  }
};

// Convenience export for translations used directly by LanguageContext
export const translations = weddingConfig.translations;

export default weddingConfig;
