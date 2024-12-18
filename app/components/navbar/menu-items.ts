import {
  FaBook,
  FaUniversity,
  FaClipboardList,
  FaRegBuilding,
  FaInfoCircle,
} from 'react-icons/fa';
import { MenuItem } from 'lib/types';

export const menuItems: MenuItem[] = [
  {
    label: 'About',
    subItems: [
      'IIUC History',
      'IIUC Trustees',
      'Former IIUC VC & Pro-VC',
      'Photo Gallery',
      'Mission & Vision',
      'Location Map',
      'IIUC Ranking',
      'Foreign Collaboration',
      'Contact Us',
    ],
    icon: FaInfoCircle,
  },
  {
    label: 'Administration',
    subItems: [
      'Honble Treasurer',
      'Chairman Finance Committee',
      'Registrar',
      'Syndicate',
      {
        label: 'Division',
        nestedSubItems: [
          'Academic Affairs Division',
          'Accounts & Finance Division',
          'Library and Information Division',
          'International Affairs & Student Welfare Division',
          'Logistics & Maintenance Division',
          'Information Technology Division',
          'Planning & Development Division',
          'Purchase & Procurement Division',
          'Transport Management Division',
          'Security Affairs Division',
          'Law and Estate Management Division',
          'Female Hostel Zone',
        ],
      },
      'Academic Council',
      'Deans of the Faculties',
      'The Proctorial Body',
      'Controller of Exams',
    ],
    icon: FaRegBuilding,
  },
  {
    label: 'Faculties',
    subItems: [
      {
        label: 'Faculty of Shariah and Islamic Studies',
        nestedSubItems: [
          'Quranic Sciences and Islamic Studies (QSIS)',
          'Dawah & Islamic Studies (DIS)',
          'Science of Hadith and Islamic Studies (SHIS)',
        ],
      },
      {
        label: 'Faculty of Science and Engineering',
        nestedSubItems: [
          'Computer Science And Engineering (CSE)',
          'Computer And Communication Engineering (CCE)',
          'Electrical And Electronic Engineering (EEE)',
          'Electronic And Telecommunication Engineering (ETE)',
          'Civil Engineering (CE)',
          'Pharmacy',
        ],
      },
      {
        label: 'Faculty of Business Studies',
        nestedSubItems: ['Business Administration'],
      },
      {
        label: 'Faculty of Arts and Humanities',
        nestedSubItems: [
          'English Language and Literature (ELL)',
          'Arabic Language and Literature (ALL)',
          'Library and Information Science (LIS)',
        ],
      },
      {
        label: 'Faculty of Law',
        nestedSubItems: ['Department of Law'],
      },
      {
        label: 'Faculty of Social Science',
        nestedSubItems: ['Economics & Banking'],
      },
    ],
    icon: FaUniversity,
  },
  {
    label: 'Admission',
    subItems: [
      'Program Wise Fees and Charges',
      'Tuition Fees of Bachelor Programs at a glance for Local Students',
      'Tuition Fees of Bachelor Programs at a glance for Foreign Students',
      'Tuition Fees For Masters Program at a glance',
      'Tuition Fees, Waiver and Scholarship',
      'International Student Admission',
      'Credit Transfer Information',
      'Admission Handbook',
      'Sample Question (Faculty of Science and Engineering)',
    ],
    icon: FaClipboardList,
  },
  {
    label: 'Academic',
    subItems: [
      {
        label: 'Academic Resources',
        nestedSubItems: [
          'Academic System',
          'Academic Policies',
          'Academic Responsibilities',
          'Graduation Requirement',
          'Rules and Regulations',
          'Rules and Regulations of Residence Hall',
          'Accreditation Standards and Criteria for Academic Program',
        ],
      },
      {
        label: 'Bachelor Programs',
        nestedSubItems: [
          'Bachelor of Arts (Hans.) in Ouranic Sciences and Islamic Studies (QSIS)',
          'Bachelor of Arts (Hons.) in Dawah and Islamic Studies (DIS)',
          'Bachelor of Arts (Hons.) in Hadith and Islamic Studies (SHIS)',
          'Bachelor of Science in Computer Science and Engineering (CSE)',
          'Bachelor of Science in Electrical and Electronic Engineering (EEE)',
          'Bachelor of Science in Electronic and Telecommunication Engineering (ETE)',
          'Bachelor of Science in Computer and Communication Engineering (CCE)',
          'Bachelor of Science in Civil Engineering (CE)',
          'Bachelor of Pharmacy (B. Pharm, Hons.)',
          'Bachelor of Business Administration (BBA)',
          'BSS (Hons.) in Economics & Banking',
          'Bachelor of Arts (Hons.) in English Language & Literature (ELL)',
          'Bachelor of Arts (Hons.) in Arabic Language & Literature (ALL)',
          'Bachelor of Laws (LL.B, Hons.)',
        ],
      },
    ],
    icon: FaBook,
  },
  {
    label: 'IQAC',
    subItems: ['Overview', 'Initiatives'],
    icon: FaUniversity,
  },
  {
    label: 'Library',
    subItems: ['Books', 'E-Resources'],
    icon: FaBook,
  },
];
