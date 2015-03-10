var userData = [
  {
    name: "Brad",
    vaccines: 'Hepatitis A: 02-10-2013, \n \
               Hepatitis B: 02-10-2013',
    medications: 'Tetracycline: 03-15-2014',
    tests: 'Hepatitis B: Negative, 03-15-2014, \n \
            HIV: Negative, 03-15-2014, \n \
            Syphilis: Negative, 03-15-2014, \n \
            HSV-2: Negative, 03-15-2014, \n \
            Gonorrhea: Negative, 03-15-2014, \n \
            Trichomoniasis: Negative, 03-15-2014, \n \
            Chlamydia: Positive, 03-15-2014, \n \
            HPV: Negative, 03-15-2014' 
  },
  {
    name: "Lucy",
    vaccines: 'Hepatitis A: 02-10-2013, \n \
               Hepatitis B: 02-10-2013',
    medications: 'Tetracycline: 03-15-2014',
    tests: 'Hepatitis B: Negative, 03-15-2014, \n \
            HIV: Negative, 03-15-2014, \n \
            Syphilis: Negative, 03-15-2014, \n \
            HSV-2: Negative, 03-15-2014, \n \
            Gonorrhea: Negative, 03-15-2014, \n \
            Trichomoniasis: Negative, 03-15-2014, \n \
            Chlamydia: Positive, 03-15-2014, \n \
            HPV: Negative, 03-15-2014' 
  },
  {
    name: "Lana",
    vaccines: 'HPV: 07-23-2014',
    medications: 'HAART: 07-23-2014',
    tests: 'Hepatitis B: Negative, 07-23-2014, \n \
            HIV: Negative, 07-23-2014, \n \
            Syphilis: Negative, 07-23-2014, \n \
            HSV-2: Negative, 07-23-2014, \n \
            Gonorrhea: Negative, 07-23-2014, \n \
            Trichomoniasis: Negative, 07-23-2014, \n \
            Chlamydia: Positive, 07-23-2014, \n \
            HPV: Positive, 07-23-2014' 
  },
  {
    name: "Kip",
    vaccines: 'N/A',
    medications: 'Tetracycline: 03-15-2014',
    tests: 'Hepatitis B: Negative, 03-15-2014, \n \
            HIV: Negative, 03-15-2014, \n \
            Syphilis: Negative, 03-15-2014, \n \
            HSV-2: Negative, 03-15-2014, \n \
            Gonorrhea: Negative, 03-15-2014, \n \
            Trichomoniasis: Negative, 03-15-2014, \n \
            Chlamydia: Positive, 03-15-2014, \n \
            HPV: Negative, 03-15-2014' 
  }
  // {
  //   name: "Jeff",
  //   vaccines: 'Hepatitis A: 02-10-2013, \n \
  //              Hepatitis B: 02-10-2013',
  //   medications: 'Tetracycline: 03-15-2014',
  //   tests: 'Hepatitis B: Negative, 03-15-2014, \n \
  //           HIV: Negative, 03-15-2014, \n \
  //           Syphilis: Negative, 03-15-2014, \n \
  //           HSV-2: Negative, 03-15-2014, \n \
  //           Gonorrhea: Negative, 03-15-2014, \n \
  //           Trichomoniasis: Negative, 03-15-2014, \n \
  //           Chlamydia: Positive, 03-15-2014, \n \
  //           HPV: Negative, 03-15-2014' 
  // },
  // {
  //   name: "Bryce",
  //   vaccines: 'Hepatitis A: 02-10-2013, \n \
  //              Hepatitis B: 02-10-2013',
  //   medications: 'Tetracycline: 03-15-2014',
  //   tests: 'Hepatitis B: Negative, 03-15-2014, \n \
  //           HIV: Negative, 03-15-2014, \n \
  //           Syphilis: Negative, 03-15-2014, \n \
  //           HSV-2: Negative, 03-15-2014, \n \
  //           Gonorrhea: Negative, 03-15-2014, \n \
  //           Trichomoniasis: Negative, 03-15-2014, \n \
  //           Chlamydia: Positive, 03-15-2014, \n \
  //           HPV: Negative, 03-15-2014' 
  // },
  // {
  //   name: "Brittany",
  //   vaccines: 'Hepatitis A: 02-10-2013, \n \
  //              Hepatitis B: 02-10-2013',
  //   medications: 'Tetracycline: 03-15-2014',
  //   tests: 'Hepatitis B: Negative, 03-15-2014, \n \
  //           HIV: Negative, 03-15-2014, \n \
  //           Syphilis: Negative, 03-15-2014, \n \
  //           HSV-2: Negative, 03-15-2014, \n \
  //           Gonorrhea: Negative, 03-15-2014, \n \
  //           Trichomoniasis: Negative, 03-15-2014, \n \
  //           Chlamydia: Positive, 03-15-2014, \n \
  //           HPV: Negative, 03-15-2014' 
  // },
  // {
  //   name: "Alice",
  //   vaccines: 'Hepatitis A: 02-10-2013, \n \
  //              Hepatitis B: 02-10-2013',
  //   medications: 'Tetracycline: 03-15-2014',
  //   tests: 'Hepatitis B: Negative, 03-15-2014, \n \
  //           HIV: Negative, 03-15-2014, \n \
  //           Syphilis: Negative, 03-15-2014, \n \
  //           HSV-2: Negative, 03-15-2014, \n \
  //           Gonorrhea: Negative, 03-15-2014, \n \
  //           Trichomoniasis: Negative, 03-15-2014, \n \
  //           Chlamydia: Positive, 03-15-2014, \n \
  //           HPV: Negative, 03-15-2014' 
  // },
  // {
  //   name: "Dave",
  //   vaccines: 'Hepatitis A: 02-10-2013, \n \
  //              Hepatitis B: 02-10-2013',
  //   medications: 'Tetracycline: 03-15-2014',
  //   tests: 'Hepatitis B: Negative, 03-15-2014, \n \
  //           HIV: Negative, 03-15-2014, \n \
  //           Syphilis: Negative, 03-15-2014, \n \
  //           HSV-2: Negative, 03-15-2014, \n \
  //           Gonorrhea: Negative, 03-15-2014, \n \
  //           Trichomoniasis: Negative, 03-15-2014, \n \
  //           Chlamydia: Positive, 03-15-2014, \n \
  //           HPV: Negative, 03-15-2014' 
  // },
  // {
  //   name: "Karen",
  //   vaccines: 'Hepatitis A: 02-10-2013, \n \
  //              Hepatitis B: 02-10-2013',
  //   medications: 'Tetracycline: 03-15-2014',
  //   tests: 'Hepatitis B: Negative, 03-15-2014, \n \
  //           HIV: Negative, 03-15-2014, \n \
  //           Syphilis: Negative, 03-15-2014, \n \
  //           HSV-2: Negative, 03-15-2014, \n \
  //           Gonorrhea: Negative, 03-15-2014, \n \
  //           Trichomoniasis: Negative, 03-15-2014, \n \
  //           Chlamydia: Positive, 03-15-2014, \n \
  //           HPV: Negative, 03-15-2014' 
  // }
];