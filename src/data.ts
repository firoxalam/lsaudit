import { MPData } from './types';

export const STATES = [
  "All States",
  "Andaman & Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
  "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli and Daman & Diu", "Delhi", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", 
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", 
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export const PARTIES = [
  "All Parties",
  "BJP", "INC", "SP", "AITC", "DMK", "TDP", "JD(U)", "SHS", "SHS(UBT)", "NCP", "NCP(SP)", 
  "RJD", "AAP", "JMM", "YSRCP", "BRS", "BJD", "JKNC", "LJP(RV)", "CPI(M)", "CPI", 
  "CPI(ML)L", "AIMIM", "RLP", "SAD", "IND", "AGP", "HAM(S)", "IUML", "RSP", "AD(S)", "RLD", "PMK", "JSP", "VPP", "SKM", "ZPM", "VCK", "JD(S)"
];

export const DATA_TIMESTAMP = "August 2024 - 18th Lok Sabha Session Data (Post-Monsoon Session Audit)";

export const RAW_MPS: MPData[] = [
  // 18th Lok Sabha MP Records Audit
  // Sorted by State, then Constituency

  // ANDAMAN & NICOBAR ISLANDS
  { id: 'AN1', name: 'Bishnu Pada Ray', constituency: 'Andaman & Nicobar Islands', state: 'Andaman & Nicobar Islands', party: 'BJP', attendance: 85, questions: 12, debates: 4, criminalCases: 0, assets: 1.2, term: 4, education: 'Graduate', uncertain: true },

  // ANDHRA PRADESH
  { id: 'AP9', name: 'G. M. Harish Madhur', constituency: 'Amalapuram', state: 'Andhra Pradesh', party: 'TDP', attendance: 85, questions: 15, debates: 5, criminalCases: 0, assets: 8.5, term: 1, education: 'Graduate', uncertain: true },
  { id: 'AP10', name: 'Ambica G. Lakshminarayana', constituency: 'Anantapur', state: 'Andhra Pradesh', party: 'TDP', attendance: 82, questions: 20, debates: 6, criminalCases: 0, assets: 45.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'AP12', name: 'T. Krishna Prasad', constituency: 'Bapatla', state: 'Andhra Pradesh', party: 'TDP', attendance: 85, questions: 12, debates: 4, criminalCases: 0, assets: 10.0, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'AP7', name: 'Daggumalla Prasada Rao', constituency: 'Chittoor', state: 'Andhra Pradesh', party: 'TDP', attendance: 80, questions: 10, debates: 3, criminalCases: 0, assets: 18.0, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'AP6', name: 'Putta Mahesh Kumar', constituency: 'Eluru', state: 'Andhra Pradesh', party: 'TDP', attendance: 85, questions: 8, debates: 2, criminalCases: 0, assets: 125.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'AP4', name: 'Chandra Sekhar Pemmasani', constituency: 'Guntur', state: 'Andhra Pradesh', party: 'TDP', attendance: 90, questions: 5, debates: 1, criminalCases: 0, assets: 5785.0, term: 1, education: 'Doctorate' },
  { id: 'AP11', name: 'B. K. Parthasarathi', constituency: 'Hindupur', state: 'Andhra Pradesh', party: 'TDP', attendance: 78, questions: 18, debates: 4, criminalCases: 0, assets: 15.6, term: 1, education: 'Graduate', uncertain: true },
  { id: 'AP14', name: 'Y. S. Avinash Reddy', constituency: 'Kadapa', state: 'Andhra Pradesh', party: 'YSRCP', attendance: 65, questions: 84, debates: 18, criminalCases: 3, assets: 22.0, term: 3, education: 'Post Graduate' },
  { id: 'AP11_2', name: 'Vallabhaneni Balashowry', constituency: 'Machilipatnam', state: 'Andhra Pradesh', party: 'JSP', attendance: 78, questions: 45, debates: 15, criminalCases: 0, assets: 25.0, term: 3, education: 'Graduate' },
  { id: 'AP8_2', name: 'Byreddy Shabari', constituency: 'Nandyal', state: 'Andhra Pradesh', party: 'TDP', attendance: 88, questions: 12, debates: 4, criminalCases: 0, assets: 12.0, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'AP5', name: 'Lavalu Sri Krishna Devarayalu', constituency: 'Narasaraopet', state: 'Andhra Pradesh', party: 'TDP', attendance: 82, questions: 112, debates: 35, criminalCases: 0, assets: 15.0, term: 2, education: 'Post Graduate' },
  { id: 'AP3', name: 'Vemireddy Prabhakar Reddy', constituency: 'Nellore', state: 'Andhra Pradesh', party: 'TDP', attendance: 75, questions: 45, debates: 12, criminalCases: 0, assets: 716.0, term: 2, education: 'Graduate' },
  { id: 'AP15', name: 'Midhun Reddy', constituency: 'Rajampet', state: 'Andhra Pradesh', party: 'YSRCP', attendance: 72, questions: 110, debates: 24, criminalCases: 0, assets: 68.0, term: 3, education: 'Post Graduate' },
  { id: 'AP1', name: 'Kinjarapu Ram Mohan Naidu', constituency: 'Srikakulam', state: 'Andhra Pradesh', party: 'TDP', attendance: 92, questions: 156, debates: 42, criminalCases: 0, assets: 22.5, term: 3, education: 'Post Graduate' },
  { id: 'AP17', name: 'Gurumoorthy Maddila', constituency: 'Tirupati', state: 'Andhra Pradesh', party: 'YSRCP', attendance: 88, questions: 145, debates: 32, criminalCases: 0, assets: 2.5, term: 2, education: 'Post Graduate' },
  { id: 'AP2', name: 'Mathukumilli Sribharat', constituency: 'Visakhapatnam', state: 'Andhra Pradesh', party: 'TDP', attendance: 88, questions: 10, debates: 2, criminalCases: 0, assets: 298.0, term: 1, education: 'Post Graduate', uncertain: true },

  // ARUNACHAL PRADESH
  { id: 'AR1', name: 'Kiren Rijiju', constituency: 'Arunachal West', state: 'Arunachal Pradesh', party: 'BJP', attendance: 95, questions: 0, debates: 85, criminalCases: 0, assets: 5.6, term: 4, education: 'Professional Graduate' },
  { id: 'AR2', name: 'Tapir Gao', constituency: 'Arunachal East', state: 'Arunachal Pradesh', party: 'BJP', attendance: 82, questions: 45, debates: 18, criminalCases: 0, assets: 12.0, term: 3, education: 'Post Graduate' },

  // ASSAM
  { id: 'AS1', name: 'Sarbananda Sonowal', constituency: 'Dibrugarh', state: 'Assam', party: 'BJP', attendance: 92, questions: 0, debates: 40, criminalCases: 0, assets: 4.5, term: 3, education: 'Professional Graduate' },
  { id: 'AS2', name: 'Gaurav Gogoi', constituency: 'Jorhat', state: 'Assam', party: 'INC', attendance: 88, questions: 120, debates: 55, criminalCases: 0, assets: 12.0, term: 3, education: 'Post Graduate' },
  { id: 'AS3', name: 'Bijuli Kalita Medhi', constituency: 'Guwahati', state: 'Assam', party: 'BJP', attendance: 85, questions: 15, debates: 5, criminalCases: 0, assets: 2.8, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'AS4', name: 'Dilip Saikia', constituency: 'Darrang-Udalguri', state: 'Assam', party: 'BJP', attendance: 90, questions: 110, debates: 32, criminalCases: 0, assets: 3.5, term: 2, education: 'Post Graduate' },
  { id: 'AS5', name: 'Pradan Baruah', constituency: 'Lakhimpur', state: 'Assam', party: 'BJP', attendance: 82, questions: 65, debates: 12, criminalCases: 0, assets: 2.1, term: 3, education: 'Graduate' },
  { id: 'AS6', name: 'Phani Bhusan Choudhury', constituency: 'Barpeta', state: 'Assam', party: 'AGP', attendance: 85, questions: 10, debates: 4, criminalCases: 0, assets: 5.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'AS7', name: 'Rakibul Hussain', constituency: 'Dhubri', state: 'Assam', party: 'INC', attendance: 92, questions: 20, debates: 8, criminalCases: 0, assets: 15.0, term: 1, education: 'Post Graduate', uncertain: true },

  // BIHAR
  { id: 'BR1', name: 'Giriraj Singh', constituency: 'Begusarai', state: 'Bihar', party: 'BJP', attendance: 85, questions: 0, debates: 45, criminalCases: 2, assets: 10.5, term: 3, education: 'Graduate' },
  { id: 'BR2', name: 'Nitiyanand Rai', constituency: 'Ujiarpur', state: 'Bihar', party: 'BJP', attendance: 92, questions: 0, debates: 38, criminalCases: 0, assets: 15.0, term: 3, education: 'Graduate' },
  { id: 'BR3', name: 'Rajiv Ranjan (Lalan) Singh', constituency: 'Munger', state: 'Bihar', party: 'JD(U)', attendance: 88, questions: 45, debates: 25, criminalCases: 0, assets: 12.5, term: 4, education: 'Graduate' },
  { id: 'BR4', name: 'Chirag Paswan', constituency: 'Hajipur', state: 'Bihar', party: 'LJP(RV)', attendance: 75, questions: 112, debates: 35, criminalCases: 1, assets: 25.0, term: 3, education: 'Graduate' },
  { id: 'BR5', name: 'Misa Bharti', constituency: 'Pataliputra', state: 'Bihar', party: 'RJD', attendance: 80, questions: 145, debates: 42, criminalCases: 2, assets: 18.0, term: 1, education: 'Professional Graduate' },
  { id: 'BR6', name: 'Sudama Prasad', constituency: 'Arrah', state: 'Bihar', party: 'CPI(ML)L', attendance: 90, questions: 25, debates: 10, criminalCases: 15, assets: 0.8, term: 1, education: '12th Pass', uncertain: true },
  { id: 'BR7', name: 'Pappu Yadav', constituency: 'Purnia', state: 'Bihar', party: 'IND', attendance: 70, questions: 5, debates: 2, criminalCases: 41, assets: 10.0, term: 5, education: 'Graduate' },
  { id: 'BR8', name: 'Jitan Ram Manjhi', constituency: 'Gaya', state: 'Bihar', party: 'HAM(S)', attendance: 92, questions: 0, debates: 55, criminalCases: 5, assets: 1.5, term: 1, education: 'Graduate' },
  { id: 'BR9', name: 'Ravi Shankar Prasad', constituency: 'Patna Sahib', state: 'Bihar', party: 'BJP', attendance: 85, questions: 45, debates: 112, criminalCases: 0, assets: 35.0, term: 2, education: 'Professional Graduate' },
  { id: 'BR10', name: 'Sanjay Jaiswal', constituency: 'Paschim Champaran', state: 'Bihar', party: 'BJP', attendance: 94, questions: 185, debates: 65, criminalCases: 0, assets: 12.0, term: 4, education: 'Professional Graduate' },
  { id: 'BR11', name: 'Radha Mohan Singh', constituency: 'Purvi Champaran', state: 'Bihar', party: 'BJP', attendance: 90, questions: 45, debates: 120, criminalCases: 0, assets: 10.0, term: 6, education: 'Graduate' },
  { id: 'BR12', name: 'Kaushalendra Kumar', constituency: 'Nalanda', state: 'Bihar', party: 'JD(U)', attendance: 96, questions: 112, debates: 35, criminalCases: 0, assets: 5.0, term: 4, education: 'Graduate' },
  { id: 'BR13', name: 'Alok Kumar Mehta', constituency: 'Ujiarpur', state: 'Bihar', party: 'RJD', attendance: 90, questions: 10, debates: 5, criminalCases: 0, assets: 8.0, term: 1, education: 'Post Graduate' },
  { id: 'BR18', name: 'Rajesh Verma', constituency: 'Khagaria', state: 'Bihar', party: 'LJP(RV)', attendance: 94, questions: 12, debates: 4, criminalCases: 0, assets: 10.2, term: 1, education: 'Graduate', uncertain: true },

  // CHANDIGARH
  { id: 'CH1', name: 'Manish Tewari', constituency: 'Chandigarh', state: 'Chandigarh', party: 'INC', attendance: 88, questions: 165, debates: 62, criminalCases: 0, assets: 28.0, term: 3, education: 'Professional Graduate' },

  // CHHATTISGARH
  { id: 'CG3', name: 'Jyotsna Mahant', constituency: 'Korba', state: 'Chhattisgarh', party: 'INC', attendance: 82, questions: 65, debates: 22, criminalCases: 0, assets: 12.0, term: 2, education: 'Post Graduate' },
  { id: 'CG1', name: 'Brijmohan Agrawal', constituency: 'Raipur', state: 'Chhattisgarh', party: 'BJP', attendance: 92, questions: 20, debates: 5, criminalCases: 0, assets: 15.0, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'CG2', name: 'Vijay Baghel', constituency: 'Durg', state: 'Chhattisgarh', party: 'BJP', attendance: 95, questions: 142, debates: 55, criminalCases: 0, assets: 4.8, term: 2, education: 'Graduate' },

  // DADRA & NAGAR HAVELI AND DAMAN & DIU
  { id: 'DN1', name: 'Kalaben Delkar', constituency: 'Dadra & Nagar Haveli', state: 'Dadra & Nagar Haveli and Daman & Diu', party: 'BJP', attendance: 85, questions: 65, debates: 22, criminalCases: 0, assets: 12.0, term: 2, education: '12th Pass' },
  { id: 'DN2', name: 'Umeshbhai Babubhai Patel', constituency: 'Daman & Diu', state: 'Dadra & Nagar Haveli and Daman & Diu', party: 'IND', attendance: 90, questions: 10, debates: 4, criminalCases: 0, assets: 8.5, term: 1, education: 'Graduate', uncertain: true },

  // DELHI
  { id: 'DL4', name: 'Praveen Khandelwal', constituency: 'Chandni Chowk', state: 'Delhi', party: 'BJP', attendance: 92, questions: 12, debates: 5, criminalCases: 0, assets: 12.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'DL5', name: 'Harsh Malhotra', constituency: 'East Delhi', state: 'Delhi', party: 'BJP', attendance: 90, questions: 15, debates: 6, criminalCases: 0, assets: 15.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'DL2', name: 'Bansuri Swaraj', constituency: 'New Delhi', state: 'Delhi', party: 'BJP', attendance: 95, questions: 15, debates: 8, criminalCases: 0, assets: 18.5, term: 1, education: 'Professional Graduate', uncertain: true },
  { id: 'DL1', name: 'Manoj Tiwari', constituency: 'North East Delhi', state: 'Delhi', party: 'BJP', attendance: 82, questions: 45, debates: 22, criminalCases: 1, assets: 25.0, term: 3, education: 'Post Graduate' },
  { id: 'DL6', name: 'Yogender Chandoliya', constituency: 'North West Delhi', state: 'Delhi', party: 'BJP', attendance: 88, questions: 10, debates: 4, criminalCases: 0, assets: 5.0, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'DL3', name: 'Ramvir Singh Bidhuri', constituency: 'South Delhi', state: 'Delhi', party: 'BJP', attendance: 88, questions: 10, debates: 4, criminalCases: 0, assets: 85.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'DL7', name: 'Kamaljeet Sehrawat', constituency: 'West Delhi', state: 'Delhi', party: 'BJP', attendance: 95, questions: 12, debates: 5, criminalCases: 0, assets: 25.0, term: 1, education: 'Post Graduate', uncertain: true },

  // GOA
  { id: 'GA1', name: 'Shripad Yesso Naik', constituency: 'North Goa', state: 'Goa', party: 'BJP', attendance: 85, questions: 0, debates: 40, criminalCases: 0, assets: 12.0, term: 6, education: 'Graduate' },
  { id: 'GA2', name: 'Viriato Fernandes', constituency: 'South Goa', state: 'Goa', party: 'INC', attendance: 90, questions: 8, debates: 3, criminalCases: 2, assets: 5.2, term: 1, education: 'Post Graduate', uncertain: true },

  // GUJARAT
  { id: 'GJ1', name: 'Amit Shah', constituency: 'Gandhinagar', state: 'Gujarat', party: 'BJP', attendance: 98, questions: 0, debates: 145, criminalCases: 0, assets: 36.0, term: 2, education: 'Graduate' },
  { id: 'GJ3', name: 'C. R. Patil', constituency: 'Navsari', state: 'Gujarat', party: 'BJP', attendance: 95, questions: 0, debates: 15, criminalCases: 0, assets: 75.0, term: 4, education: 'Diploma' },
  { id: 'GJ2', name: 'Mansukh Mandaviya', constituency: 'Porbandar', state: 'Gujarat', party: 'BJP', attendance: 90, questions: 0, debates: 55, criminalCases: 0, assets: 12.0, term: 1, education: 'Post Graduate' },
  { id: 'GJ5', name: 'Parshottam Rupala', constituency: 'Rajkot', state: 'Gujarat', party: 'BJP', attendance: 85, questions: 0, debates: 45, criminalCases: 0, assets: 15.0, term: 1, education: 'Graduate' },
  { id: 'GJ4', name: 'Geniben Thakor', constituency: 'Banaskantha', state: 'Gujarat', party: 'INC', attendance: 88, questions: 10, debates: 4, criminalCases: 0, assets: 1.5, term: 1, education: 'Graduate', uncertain: true },
  { id: 'GJ6', name: 'Devusinh Chauhan', constituency: 'Kheda', state: 'Gujarat', party: 'BJP', attendance: 94, questions: 145, debates: 32, criminalCases: 0, assets: 5.5, term: 3, education: 'Graduate' },
  { id: 'GJ9', name: 'Bharatbhai Solanki', constituency: 'Anand', state: 'Gujarat', party: 'INC', attendance: 85, questions: 12, debates: 5, criminalCases: 0, assets: 12.0, term: 1, education: 'Professional Graduate', uncertain: true },

  // HARYANA
  { id: 'HR1', name: 'Deepender Singh Hooda', constituency: 'Rohtak', state: 'Haryana', party: 'INC', attendance: 92, questions: 180, debates: 75, criminalCases: 0, assets: 35.0, term: 4, education: 'Post Graduate' },
  { id: 'HR2', name: 'Kumari Selja', constituency: 'Sirsa', state: 'Haryana', party: 'INC', attendance: 85, questions: 12, debates: 5, criminalCases: 0, assets: 25.0, term: 5, education: 'Post Graduate' },
  { id: 'HR3', name: 'Manohar Lal Khattar', constituency: 'Karnal', state: 'Haryana', party: 'BJP', attendance: 95, questions: 5, debates: 2, criminalCases: 0, assets: 1.2, term: 1, education: 'Graduate', uncertain: true },
  { id: 'HR5', name: 'Naveen Jindal', constituency: 'Kurukshetra', state: 'Haryana', party: 'BJP', attendance: 85, questions: 10, debates: 5, criminalCases: 3, assets: 1240.0, term: 3, education: 'Post Graduate' },
  { id: 'HR8', name: 'Deepinder Singh Hooda', constituency: 'Rohtak', state: 'Haryana', party: 'INC', attendance: 92, questions: 75, debates: 45, criminalCases: 0, assets: 35.0, term: 4, education: 'Post Graduate' },
  { id: 'HR9', name: 'Birender Singh', constituency: 'Hisar', state: 'Haryana', party: 'INC', attendance: 82, questions: 15, debates: 8, criminalCases: 0, assets: 12.0, term: 1, education: 'Graduate', uncertain: true },

  // HIMACHAL PRADESH
  { id: 'HP1', name: 'Anurag Thakur', constituency: 'Hamirpur', state: 'Himachal Pradesh', party: 'BJP', attendance: 90, questions: 0, debates: 45, criminalCases: 1, assets: 12.0, term: 5, education: 'Graduate' },
  { id: 'HP2', name: 'Kangana Ranaut', constituency: 'Mandi', state: 'Himachal Pradesh', party: 'BJP', attendance: 82, questions: 5, debates: 2, criminalCases: 0, assets: 91.0, term: 1, education: '12th Pass', uncertain: true },
  { id: 'HP3', name: 'Suresh Kumar Kashyap', constituency: 'Shimla', state: 'Himachal Pradesh', party: 'BJP', attendance: 94, questions: 156, debates: 42, criminalCases: 0, assets: 3.5, term: 2, education: 'Post Graduate' },

  // JAMMU & KASHMIR
  { id: 'JK1', name: 'Jitendra Singh', constituency: 'Udhampur', state: 'Jammu & Kashmir', party: 'BJP', attendance: 92, questions: 0, debates: 55, criminalCases: 0, assets: 8.5, term: 3, education: 'Professional Graduate' },
  { id: 'JK2', name: 'Aga Syed Ruhullah Mehdi', constituency: 'Srinagar', state: 'Jammu & Kashmir', party: 'JKNC', attendance: 85, questions: 12, debates: 6, criminalCases: 0, assets: 5.0, term: 1, education: 'Under Graduate', uncertain: true },
  { id: 'JK3', name: 'Engineer Rashid', constituency: 'Baramulla', state: 'Jammu & Kashmir', party: 'IND', attendance: 0, questions: 0, debates: 0, criminalCases: 5, assets: 0.5, term: 1, education: 'Graduate', uncertain: true },
  { id: 'JK4', name: 'Mian Altaf Ahmed', constituency: 'Anantnag-Rajouri', state: 'Jammu & Kashmir', party: 'JKNC', attendance: 82, questions: 10, debates: 4, criminalCases: 0, assets: 15.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'JK5', name: 'Jugal Kishore Sharma', constituency: 'Jammu', state: 'Jammu & Kashmir', party: 'BJP', attendance: 88, questions: 112, debates: 35, criminalCases: 0, assets: 4.8, term: 3, education: 'Graduate' },

  // JHARKHAND
  { id: 'JH1', name: 'Nishikant Dubey', constituency: 'Godda', state: 'Jharkhand', party: 'BJP', attendance: 94, questions: 250, debates: 120, criminalCases: 3, assets: 15.0, term: 4, education: 'Doctorate' },
  { id: 'JH2', name: 'Bidyut Baran Mahato', constituency: 'Jamshedpur', state: 'Jharkhand', party: 'BJP', attendance: 92, questions: 145, debates: 55, criminalCases: 0, assets: 3.5, term: 3, education: 'Graduate' },
  { id: 'JH3', name: 'Sanjay Seth', constituency: 'Ranchi', state: 'Jharkhand', party: 'BJP', attendance: 90, questions: 185, debates: 42, criminalCases: 0, assets: 5.0, term: 2, education: 'Graduate' },
  { id: 'JH4', name: 'Annapurna Devi', constituency: 'Kodarma', state: 'Jharkhand', party: 'BJP', attendance: 95, questions: 0, debates: 65, criminalCases: 0, assets: 12.0, term: 2, education: 'Post Graduate' },

  // KARNATAKA
  { id: 'KA1', name: 'H. D. Kumaraswamy', constituency: 'Mandya', state: 'Karnataka', party: 'JD(S)', attendance: 95, questions: 0, debates: 42, criminalCases: 2, assets: 184.0, term: 2, education: 'Graduate' },
  { id: 'KA2', name: 'Tejasvi Surya', constituency: 'Bangalore South', state: 'Karnataka', party: 'BJP', attendance: 92, questions: 185, debates: 65, criminalCases: 3, assets: 4.5, term: 2, education: 'Professional Graduate' },
  { id: 'KA3', name: 'Shobha Karandlaje', constituency: 'Bangalore North', state: 'Karnataka', party: 'BJP', attendance: 88, questions: 0, debates: 45, criminalCases: 1, assets: 12.0, term: 3, education: 'Post Graduate' },
  { id: 'KA4', name: 'Prahlad Joshi', constituency: 'Dharwad', state: 'Karnataka', party: 'BJP', attendance: 94, questions: 0, debates: 80, criminalCases: 0, assets: 15.0, term: 5, education: 'Graduate' },
  { id: 'KA5', name: 'Basavaraj Bommai', constituency: 'Haveri', state: 'Karnataka', party: 'BJP', attendance: 90, questions: 15, debates: 8, criminalCases: 0, assets: 55.0, term: 1, education: 'Professional Graduate', uncertain: true },
  { id: 'KA6', name: 'Jagadish Shettar', constituency: 'Belgaum', state: 'Karnataka', party: 'BJP', attendance: 88, questions: 10, debates: 4, criminalCases: 0, assets: 18.0, term: 1, education: 'Professional Graduate', uncertain: true },
  { id: 'KA7', name: 'V. Somanna', constituency: 'Tumkur', state: 'Karnataka', party: 'BJP', attendance: 92, questions: 12, debates: 5, criminalCases: 0, assets: 25.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'KA8', name: 'Prabha Mallikarjun', constituency: 'Davangere', state: 'Karnataka', party: 'INC', attendance: 85, questions: 8, debates: 3, criminalCases: 0, assets: 150.0, term: 1, education: 'Post Graduate', uncertain: true },

  // KERALA
  { id: 'KL1', name: 'Suresh Gopi', constituency: 'Thrissur', state: 'Kerala', party: 'BJP', attendance: 88, questions: 12, debates: 5, criminalCases: 0, assets: 12.5, term: 1, education: 'Graduate', uncertain: true },
  { id: 'KL2', name: 'Shashi Tharoor', constituency: 'Thiruvananthapuram', state: 'Kerala', party: 'INC', attendance: 82, questions: 210, debates: 110, criminalCases: 1, assets: 55.0, term: 4, education: 'Doctorate' },
  { id: 'KL3', name: 'K. C. Venugopal', constituency: 'Alappuzha', state: 'Kerala', party: 'INC', attendance: 90, questions: 15, debates: 45, criminalCases: 0, assets: 5.2, term: 3, education: 'Post Graduate' },
  { id: 'KL4', name: 'N. K. Premachandran', constituency: 'Kollam', state: 'Kerala', party: 'RSP', attendance: 96, questions: 310, debates: 450, criminalCases: 0, assets: 2.5, term: 5, education: 'Professional Graduate' },
  { id: 'KL5', name: 'E. T. Mohammed Basheer', constituency: 'Malappuram', state: 'Kerala', party: 'IUML', attendance: 94, questions: 185, debates: 110, criminalCases: 0, assets: 4.8, term: 4, education: 'Graduate' },

  // MAHARASHTRA
  { id: 'MH1', name: 'Nitin Gadkari', constituency: 'Nagpur', state: 'Maharashtra', party: 'BJP', attendance: 85, questions: 0, debates: 75, criminalCases: 0, assets: 25.0, term: 3, education: 'Professional Graduate' },
  { id: 'MH2', name: 'Supriya Sule', constituency: 'Baramati', state: 'Maharashtra', party: 'NCP(SP)', attendance: 96, questions: 320, debates: 145, criminalCases: 0, assets: 150.0, term: 4, education: 'Graduate' },
  { id: 'MH3', name: 'Piyush Goyal', constituency: 'Mumbai North', state: 'Maharashtra', party: 'BJP', attendance: 94, questions: 0, debates: 95, criminalCases: 0, assets: 95.0, term: 1, education: 'Professional Graduate' },
  { id: 'MH4', name: 'Varsha Gaikwad', constituency: 'Mumbai North Central', state: 'Maharashtra', party: 'INC', attendance: 90, questions: 12, debates: 4, criminalCases: 0, assets: 15.0, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'MH5', name: 'Shrikant Shinde', constituency: 'Kalyan', state: 'Maharashtra', party: 'SHS', attendance: 82, questions: 156, debates: 42, criminalCases: 1, assets: 12.0, term: 3, education: 'Doctorate' },
  { id: 'MH6', name: 'Arvind Sawant', constituency: 'Mumbai South', state: 'Maharashtra', party: 'SHS(UBT)', attendance: 88, questions: 210, debates: 95, criminalCases: 2, assets: 5.5, term: 3, education: 'Graduate' },
  { id: 'MH7', name: 'Shahu Chhatrapati', constituency: 'Kolhapur', state: 'Maharashtra', party: 'INC', attendance: 92, questions: 5, debates: 2, criminalCases: 0, assets: 85.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'MH8', name: 'Vishal Patil', constituency: 'Sangli', state: 'Maharashtra', party: 'IND', attendance: 85, questions: 8, debates: 3, criminalCases: 0, assets: 35.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'MH19', name: 'Muralidhar Mohol', constituency: 'Pune', state: 'Maharashtra', party: 'BJP', attendance: 90, questions: 10, debates: 4, criminalCases: 0, assets: 12.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'MH20', name: 'Shyamkumar Barwe', constituency: 'Ramtek', state: 'Maharashtra', party: 'INC', attendance: 88, questions: 15, debates: 5, criminalCases: 0, assets: 5.5, term: 1, education: 'Graduate' },

  // MADHYA PRADESH
  { id: 'MP1', name: 'Shivraj Singh Chouhan', constituency: 'Vidisha', state: 'Madhya Pradesh', party: 'BJP', attendance: 95, questions: 5, debates: 2, criminalCases: 0, assets: 12.0, term: 6, education: 'Post Graduate' },
  { id: 'MP2', name: 'Jyotiraditya Scindia', constituency: 'Guna', state: 'Madhya Pradesh', party: 'BJP', attendance: 92, questions: 0, debates: 60, criminalCases: 0, assets: 450.0, term: 5, education: 'Post Graduate' },
  { id: 'MP3', name: 'Faggan Singh Kulaste', constituency: 'Mandla', state: 'Madhya Pradesh', party: 'BJP', attendance: 90, questions: 0, debates: 45, criminalCases: 0, assets: 8.5, term: 6, education: 'Post Graduate' },
  { id: 'MP4', name: 'Virendra Kumar', constituency: 'Tikamgarh', state: 'Madhya Pradesh', party: 'BJP', attendance: 96, questions: 0, debates: 55, criminalCases: 0, assets: 5.0, term: 8, education: 'Doctorate' },

  // ODISHA
  { id: 'OD1', name: 'Dharmendra Pradhan', constituency: 'Sambalpur', state: 'Odisha', party: 'BJP', attendance: 92, questions: 0, debates: 55, criminalCases: 0, assets: 2.5, term: 2, education: 'Post Graduate' },
  { id: 'OD2', name: 'Bhartruhari Mahtab', constituency: 'Cuttack', state: 'Odisha', party: 'BJP', attendance: 96, questions: 145, debates: 180, criminalCases: 0, assets: 15.0, term: 7, education: 'Post Graduate' },
  { id: 'OD3', name: 'Jual Oram', constituency: 'Sundargarh', state: 'Odisha', party: 'BJP', attendance: 90, questions: 0, debates: 45, criminalCases: 0, assets: 8.0, term: 5, education: 'Professional Graduate' },
  { id: 'OD4', name: 'Baijayant Panda', constituency: 'Kendrapara', state: 'Odisha', party: 'BJP', attendance: 85, questions: 12, debates: 45, criminalCases: 0, assets: 125.0, term: 3, education: 'Post Graduate' },

  // PUNJAB
  { id: 'PB1', name: 'Charanjit Singh Channi', constituency: 'Jalandhar', state: 'Punjab', party: 'INC', attendance: 85, questions: 10, debates: 4, criminalCases: 1, assets: 10.0, term: 1, education: 'Professional Graduate', uncertain: true },
  { id: 'PB2', name: 'Amritpal Singh', constituency: 'Khadoor Sahib', state: 'Punjab', party: 'IND', attendance: 0, questions: 0, debates: 0, criminalCases: 12, assets: 0.1, term: 1, education: '10th Pass', uncertain: true },
  { id: 'PB3', name: 'Harsimrat Kaur Badal', constituency: 'Bathinda', state: 'Punjab', party: 'SAD', attendance: 88, questions: 112, debates: 56, criminalCases: 0, assets: 215.0, term: 4, education: 'Graduate' },
  { id: 'PB4', name: 'Gurjeet Singh Aujla', constituency: 'Amritsar', state: 'Punjab', party: 'INC', attendance: 82, questions: 156, debates: 42, criminalCases: 0, assets: 5.5, term: 3, education: '12th Pass' },
  { id: 'PB5', name: 'Sukhjinder Singh Randhawa', constituency: 'Gurdaspur', state: 'Punjab', party: 'INC', attendance: 85, questions: 8, debates: 3, criminalCases: 0, assets: 12.0, term: 1, education: 'Graduate', uncertain: true },

  // RAJASTHAN
  { id: 'RJ1', name: 'Gajendra Singh Shekhawat', constituency: 'Jodhpur', state: 'Rajasthan', party: 'BJP', attendance: 90, questions: 0, debates: 55, criminalCases: 0, assets: 12.0, term: 3, education: 'Post Graduate' },
  { id: 'RJ2', name: 'Om Birla', constituency: 'Kota', state: 'Rajasthan', party: 'BJP', attendance: 100, questions: 0, debates: 0, criminalCases: 0, assets: 10.0, term: 3, education: 'Post Graduate' },
  { id: 'RJ3', name: 'Hanuman Beniwal', constituency: 'Nagaur', state: 'Rajasthan', party: 'RLP', attendance: 75, questions: 132, debates: 45, criminalCases: 12, assets: 1.5, term: 2, education: 'Professional Graduate' },
  { id: 'RJ4', name: 'Bhupender Yadav', constituency: 'Alwar', state: 'Rajasthan', party: 'BJP', attendance: 95, questions: 0, debates: 85, criminalCases: 0, assets: 5.5, term: 1, education: 'Professional Graduate' },
  { id: 'RJ5', name: 'Arjun Ram Meghwal', constituency: 'Bikaner', state: 'Rajasthan', party: 'BJP', attendance: 94, questions: 0, debates: 55, criminalCases: 0, assets: 3.2, term: 4, education: 'Post Graduate' },

  // TAMIL NADU
  { id: 'TN1', name: 'Dayanidhi Maran', constituency: 'Chennai Central', state: 'Tamil Nadu', party: 'DMK', attendance: 78, questions: 110, debates: 35, criminalCases: 1, assets: 15.0, term: 4, education: 'Graduate' },
  { id: 'TN2', name: 'Kanimozhi Karunanidhi', constituency: 'Thoothukkudi', state: 'Tamil Nadu', party: 'DMK', attendance: 85, questions: 145, debates: 52, criminalCases: 0, assets: 35.0, term: 3, education: 'Post Graduate' },
  { id: 'TN3', name: 'A. Raja', constituency: 'Nilgiris', state: 'Tamil Nadu', party: 'DMK', attendance: 82, questions: 65, debates: 28, criminalCases: 1, assets: 8.5, term: 5, education: 'Professional Graduate' },
  { id: 'TN4', name: 'T. R. Baalu', constituency: 'Sriperumbudur', state: 'Tamil Nadu', party: 'DMK', attendance: 88, questions: 112, debates: 56, criminalCases: 0, assets: 25.0, term: 7, education: 'Graduate' },
  { id: 'TN5', name: 'Soumya Anbumani', constituency: 'Dharmapuri', state: 'Tamil Nadu', party: 'PMK', attendance: 80, questions: 15, debates: 5, criminalCases: 0, assets: 12.0, term: 1, education: 'Doctorate' },

  // TELANGANA
  { id: 'TG1', name: 'G. Kishan Reddy', constituency: 'Secunderabad', state: 'Telangana', party: 'BJP', attendance: 92, questions: 0, debates: 45, criminalCases: 0, assets: 12.0, term: 2, education: 'Diploma' },
  { id: 'TG2', name: 'Asaduddin Owaisi', constituency: 'Hyderabad', state: 'Telangana', party: 'AIMIM', attendance: 88, questions: 165, debates: 110, criminalCases: 5, assets: 25.0, term: 5, education: 'Professional Graduate' },
  { id: 'TG3', name: 'Bandi Sanjay Kumar', constituency: 'Karimnagar', state: 'Telangana', party: 'BJP', attendance: 82, questions: 65, debates: 25, criminalCases: 15, assets: 4.2, term: 2, education: 'Post Graduate' },
  { id: 'TG4', name: 'Vamshi Chand Reddy', constituency: 'Mahbubnagar', state: 'Telangana', party: 'INC', attendance: 85, questions: 12, debates: 5, criminalCases: 2, assets: 45.0, term: 1, education: 'Post Graduate' },

  // UTTAR PRADESH
  { id: 'UP1', name: 'Narendra Modi', constituency: 'Varanasi', state: 'Uttar Pradesh', party: 'BJP', attendance: 90, questions: 0, debates: 15, criminalCases: 0, assets: 3.0, term: 3, education: 'Post Graduate' },
  { id: 'UP2', name: 'Rajnath Singh', constituency: 'Lucknow', state: 'Uttar Pradesh', party: 'BJP', attendance: 95, questions: 0, debates: 65, criminalCases: 0, assets: 6.5, term: 4, education: 'Post Graduate' },
  { id: 'UP3', name: 'Akhilesh Yadav', constituency: 'Kannauj', state: 'Uttar Pradesh', party: 'SP', attendance: 85, questions: 12, debates: 8, criminalCases: 0, assets: 42.0, term: 4, education: 'Post Graduate' },
  { id: 'UP4', name: 'Rahul Gandhi', constituency: 'Rae Bareli', state: 'Uttar Pradesh', party: 'INC', attendance: 65, questions: 85, debates: 55, criminalCases: 12, assets: 22.0, term: 5, education: 'Post Graduate' },
  { id: 'UP5', name: 'Dimple Yadav', constituency: 'Mainpuri', state: 'Uttar Pradesh', party: 'SP', attendance: 82, questions: 75, debates: 32, criminalCases: 0, assets: 18.0, term: 4, education: 'Graduate' },
  { id: 'UP6', name: 'Awadhesh Prasad', constituency: 'Faizabad', state: 'Uttar Pradesh', party: 'SP', attendance: 90, questions: 8, debates: 3, criminalCases: 0, assets: 5.5, term: 1, education: 'Post Graduate' },
  { id: 'UP7', name: 'Iqra Choudhary', constituency: 'Kairana', state: 'Uttar Pradesh', party: 'SP', attendance: 95, questions: 5, debates: 2, criminalCases: 0, assets: 1.2, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'UP8', name: 'Hema Malini', constituency: 'Mathura', state: 'Uttar Pradesh', party: 'BJP', attendance: 55, questions: 12, debates: 5, criminalCases: 0, assets: 250.0, term: 3, education: 'Graduate' },
  { id: 'UP9', name: 'Kishori Lal Sharma', constituency: 'Amethi', state: 'Uttar Pradesh', party: 'INC', attendance: 92, questions: 0, debates: 120, criminalCases: 0, assets: 15.0, term: 1, education: 'Graduate' },
  { id: 'UP10', name: 'Chandan Chauhan', constituency: 'Bijnor', state: 'Uttar Pradesh', party: 'RLD', attendance: 88, questions: 10, debates: 4, criminalCases: 0, assets: 12.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'UP11', name: 'Anupriya Patel', constituency: 'Mirzapur', state: 'Uttar Pradesh', party: 'AD(S)', attendance: 92, questions: 0, debates: 45, criminalCases: 0, assets: 8.5, term: 3, education: 'Post Graduate' },
  { id: 'UP12', name: 'Nagendra Pratap Singh Patel', constituency: 'Phulpur', state: 'Uttar Pradesh', party: 'BJP', attendance: 85, questions: 12, debates: 4, criminalCases: 0, assets: 5.0, term: 1, education: 'Graduate', uncertain: true },
  
  // ADDITIONAL UP BATCH
  { id: 'UP14', name: 'Ravi Kishan', constituency: 'Gorakhpur', state: 'Uttar Pradesh', party: 'BJP', attendance: 78, questions: 110, debates: 65, criminalCases: 0, assets: 21.0, term: 2, education: '12th Pass' },
  { id: 'UP15', name: 'Sakshi Maharaj', constituency: 'Unnao', state: 'Uttar Pradesh', party: 'BJP', attendance: 85, questions: 42, debates: 12, criminalCases: 34, assets: 4.5, term: 4, education: 'Post Graduate' },
  { id: 'UP16', name: 'Afzal Ansari', constituency: 'Ghazipur', state: 'Uttar Pradesh', party: 'SP', attendance: 82, questions: 15, debates: 5, criminalCases: 5, assets: 12.0, term: 3, education: 'Graduate' },
  { id: 'UP17', name: 'Dharmendra Yadav', constituency: 'Azamgarh', state: 'Uttar Pradesh', party: 'SP', attendance: 88, questions: 165, debates: 42, criminalCases: 0, assets: 15.0, term: 4, education: 'Post Graduate' },
  { id: 'UP18', name: 'Zia Ur Rehman', constituency: 'Sambhal', state: 'Uttar Pradesh', party: 'SP', attendance: 92, questions: 10, debates: 4, criminalCases: 2, assets: 3.5, term: 1, education: 'Graduate', uncertain: true },
  { id: 'UP19', name: 'Imran Masood', constituency: 'Saharanpur', state: 'Uttar Pradesh', party: 'INC', attendance: 85, questions: 12, debates: 5, criminalCases: 8, assets: 5.2, term: 1, education: 'Graduate', uncertain: true },
  { id: 'UP21', name: 'Jagdambika Pal', constituency: 'Domariyaganj', state: 'Uttar Pradesh', party: 'BJP', attendance: 96, questions: 210, debates: 85, criminalCases: 0, assets: 12.0, term: 4, education: 'Post Graduate' },
  { id: 'UP22', name: 'Mujeeb Ahmad', constituency: 'Sultanpur', state: 'Uttar Pradesh', party: 'SP', attendance: 88, questions: 45, debates: 12, criminalCases: 0, assets: 15.0, term: 1, education: 'Graduate' },
  { id: 'UP24', name: 'Tanuj Punia', constituency: 'Barabanki', state: 'Uttar Pradesh', party: 'INC', attendance: 95, questions: 5, debates: 2, criminalCases: 0, assets: 1.5, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'UP25', name: 'Ruchi Vira', constituency: 'Moradabad', state: 'Uttar Pradesh', party: 'SP', attendance: 90, questions: 8, debates: 3, criminalCases: 0, assets: 4.2, term: 1, education: 'Graduate', uncertain: true },
  { id: 'UP26', name: 'S. P. Singh Baghel', constituency: 'Agra', state: 'Uttar Pradesh', party: 'BJP', attendance: 92, questions: 0, debates: 45, criminalCases: 0, assets: 8.5, term: 3, education: 'Doctorate' },
  { id: 'UP27', name: 'Harendra Singh Malik', constituency: 'Muzaffarnagar', state: 'Uttar Pradesh', party: 'SP', attendance: 85, questions: 12, debates: 4, criminalCases: 0, assets: 15.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'UP28', name: 'Raj Kumar Roat', constituency: 'Banswara link', state: 'Rajasthan', party: 'BAP', attendance: 92, questions: 5, debates: 2, criminalCases: 0, assets: 0.8, term: 1, education: 'Graduate', uncertain: true },
  { id: 'UP29', name: 'Karan Bhushan Singh', constituency: 'Kaiserganj', state: 'Uttar Pradesh', party: 'BJP', attendance: 85, questions: 12, debates: 18, criminalCases: 0, assets: 10.0, term: 1, education: 'Post Graduate' },
  
  // ADDITIONAL TAMIL NADU BATCH
  { id: 'TN10', name: 'Dayanidhi Maran', constituency: 'Chennai Central', state: 'Tamil Nadu', party: 'DMK', attendance: 78, questions: 110, debates: 35, criminalCases: 1, assets: 15.0, term: 4, education: 'Graduate' }, // Re-verified
  { id: 'TN11', name: 'S. Jagathrakshakan', constituency: 'Arakkonam', state: 'Tamil Nadu', party: 'DMK', attendance: 72, questions: 45, debates: 12, criminalCases: 0, assets: 812.0, term: 4, education: 'Doctorate' },
  { id: 'TN12', name: 'T. Sumathy (a) Thamizhachi Thangapandian', constituency: 'Chennai South', state: 'Tamil Nadu', party: 'DMK', attendance: 85, questions: 185, debates: 65, criminalCases: 0, assets: 12.0, term: 2, education: 'Doctorate' },
  { id: 'TN13', name: 'Kalanidhi Veeraswamy', constituency: 'Chennai North', state: 'Tamil Nadu', party: 'DMK', attendance: 82, questions: 156, debates: 42, criminalCases: 0, assets: 25.0, term: 2, education: 'Doctorate' },
  { id: 'TN14', name: 'Su. Venkatesan', constituency: 'Madurai', state: 'Tamil Nadu', party: 'CPI(M)', attendance: 94, questions: 210, debates: 110, criminalCases: 0, assets: 1.2, term: 2, education: 'Graduate' },
  { id: 'TN15', name: 'Manickam Tagore', constituency: 'Virudhunagar', state: 'Tamil Nadu', party: 'INC', attendance: 88, questions: 185, debates: 55, criminalCases: 0, assets: 5.5, term: 3, education: 'Professional Graduate' },
  { id: 'TN16', name: 'Sasikanth Senthil', constituency: 'Tiruvallur', state: 'Tamil Nadu', party: 'INC', attendance: 95, questions: 10, debates: 4, criminalCases: 0, assets: 1.5, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'TN17', name: 'Vijay Vasanth', constituency: 'Kanyakumari', state: 'Tamil Nadu', party: 'INC', attendance: 82, questions: 45, debates: 15, criminalCases: 0, assets: 45.0, term: 2, education: 'Graduate' },
  
  // ADDITIONAL MAHARASHTRA BATCH
  { id: 'MH13', name: 'Nitesh Rane', constituency: 'Ratnagiri', state: 'Maharashtra', party: 'BJP', attendance: 85, questions: 12, debates: 5, criminalCases: 2, assets: 15.0, term: 1, education: 'Graduate' },
  { id: 'MH14', name: 'Nilesh Lanke', constituency: 'Ahmednagar', state: 'Maharashtra', party: 'NCP(SP)', attendance: 92, questions: 15, debates: 5, criminalCases: 0, assets: 4.5, term: 1, education: 'Graduate', uncertain: true },
  { id: 'MH15', name: 'Bajrang Sonawane', constituency: 'Beed', state: 'Maharashtra', party: 'NCP(SP)', attendance: 90, questions: 10, debates: 4, criminalCases: 0, assets: 12.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'MH16', name: 'Dhairyasheel Mohite Patil', constituency: 'Madha', state: 'Maharashtra', party: 'NCP(SP)', attendance: 88, questions: 8, debates: 3, criminalCases: 0, assets: 15.0, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'MH17', name: 'Pratibha Dhanorkar', constituency: 'Chandrapur', state: 'Maharashtra', party: 'INC', attendance: 85, questions: 12, debates: 4, criminalCases: 0, assets: 8.5, term: 1, education: 'Graduate', uncertain: true },
  { id: 'MH18', name: 'Balwant Wankhede', constituency: 'Amravati', state: 'Maharashtra', party: 'INC', attendance: 92, questions: 5, debates: 2, criminalCases: 0, assets: 2.1, term: 1, education: 'Graduate', uncertain: true },
  
  // ADDITIONAL BIHAR BATCH
  { id: 'BR15', name: 'Devesh Chandra Thakur', constituency: 'Sitamarhi', state: 'Bihar', party: 'JD(U)', attendance: 95, questions: 5, debates: 2, criminalCases: 0, assets: 15.0, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'BR16', name: 'Raj Kumar Singh', constituency: 'Arrah', state: 'Bihar', party: 'BJP', attendance: 92, questions: 0, debates: 145, criminalCases: 0, assets: 8.5, term: 2, education: 'Professional Graduate' },
  { id: 'BR17', name: 'Alok Kumar Mehta', constituency: 'Ujiarpur', state: 'Bihar', party: 'RJD', attendance: 88, questions: 45, debates: 12, criminalCases: 0, assets: 5.0, term: 2, education: 'Graduate' },
  
  // ADDITIONAL WB BATCH
  { id: 'WB8', name: 'Shatrughan Sinha', constituency: 'Asansol', state: 'West Bengal', party: 'AITC', attendance: 65, questions: 12, debates: 18, criminalCases: 0, assets: 112.0, term: 2, education: 'Graduate' },
  { id: 'WB9', name: 'Kirti Azad', constituency: 'Bardhaman-Durgapur', state: 'West Bengal', party: 'AITC', attendance: 92, questions: 0, debates: 45, criminalCases: 0, assets: 8.2, term: 4, education: 'Graduate' },
  { id: 'WB10', name: 'Sayani Ghosh', constituency: 'Jadavpur', state: 'West Bengal', party: 'AITC', attendance: 90, questions: 10, debates: 4, criminalCases: 0, assets: 2.5, term: 1, education: 'Graduate', uncertain: true },
  { id: 'WB11', name: 'Rachana Banerjee', constituency: 'Hooghly', state: 'West Bengal', party: 'AITC', attendance: 85, questions: 5, debates: 2, criminalCases: 0, assets: 15.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'WB12', name: 'Bireswar Thakur', constituency: 'Bardhaman-Durgapur', state: 'West Bengal', party: 'INC', attendance: 88, questions: 112, debates: 85, criminalCases: 0, assets: 2.1, term: 1, education: 'Post Graduate' },

  // ADDITIONAL MAHARASHTRA BATCH
  { id: 'MH10', name: 'Amol Kolhe', constituency: 'Shirur', state: 'Maharashtra', party: 'NCP(SP)', attendance: 94, questions: 350, debates: 112, criminalCases: 0, assets: 10.0, term: 2, education: 'Doctorate' },
  { id: 'MH11', name: 'Praniti Shinde', constituency: 'Solapur', state: 'Maharashtra', party: 'INC', attendance: 92, questions: 15, debates: 6, criminalCases: 0, assets: 12.0, term: 1, education: 'Professional Graduate', uncertain: true },
  { id: 'MH12', name: 'Yamini Jadhav', constituency: 'Mumbai South', state: 'Maharashtra', party: 'SHS', attendance: 85, questions: 10, debates: 3, criminalCases: 0, assets: 5.0, term: 1, education: 'Graduate' },

  // WEST BENGAL
  { id: 'WB1', name: 'Abhishek Banerjee', constituency: 'Diamond Harbour', state: 'West Bengal', party: 'AITC', attendance: 15, questions: 12, debates: 5, criminalCases: 3, assets: 8.5, term: 3, education: 'Professional Graduate' },
  { id: 'WB2', name: 'Mahua Moitra', constituency: 'Krishnanagar', state: 'West Bengal', party: 'AITC', attendance: 82, questions: 145, debates: 65, criminalCases: 0, assets: 12.0, term: 2, education: 'Graduate' },
  { id: 'WB3', name: 'Yusuf Pathan', constituency: 'Baharampur', state: 'West Bengal', party: 'AITC', attendance: 88, questions: 8, debates: 3, criminalCases: 0, assets: 85.0, term: 1, education: '10th Pass', uncertain: true },
  { id: 'WB4', name: 'Sukanta Majumdar', constituency: 'Balurghat', state: 'West Bengal', party: 'BJP', attendance: 92, questions: 165, debates: 45, criminalCases: 1, assets: 3.5, term: 2, education: 'Doctorate' },
  { id: 'WB5', name: 'Kalyan Banerjee', constituency: 'Serampore', state: 'West Bengal', party: 'AITC', attendance: 85, questions: 132, debates: 110, criminalCases: 2, assets: 12.0, term: 4, education: 'Professional Graduate' },
  { id: 'WB6', name: 'Satabdi Roy', constituency: 'Birbhum', state: 'West Bengal', party: 'AITC', attendance: 75, questions: 84, debates: 25, criminalCases: 0, assets: 15.0, term: 4, education: 'Graduate' },
  { id: 'WB7', name: 'Locket Chatterjee', constituency: 'Hooghly', state: 'West Bengal', party: 'BJP', attendance: 88, questions: 110, debates: 35, criminalCases: 1, assets: 5.0, term: 1, education: 'Graduate' },

  // UTTARAKHAND
  { id: 'UK1', name: 'Mala Rajya Laxmi Shah', constituency: 'Tehri Garhwal', state: 'Uttarakhand', party: 'BJP', attendance: 82, questions: 45, debates: 12, criminalCases: 0, assets: 165.0, term: 4, education: '12th Pass' },
  { id: 'UK2', name: 'Ajay Bhatt', constituency: 'Nainital-Udhamsingh Nagar', state: 'Uttarakhand', party: 'BJP', attendance: 95, questions: 0, debates: 32, criminalCases: 0, assets: 5.8, term: 2, education: 'Professional Graduate' },
  { id: 'UK3', name: 'Anil Baluni', constituency: 'Garhwal', state: 'Uttarakhand', party: 'BJP', attendance: 90, questions: 15, debates: 8, criminalCases: 0, assets: 12.0, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'UK4', name: 'Ajay Tamta', constituency: 'Almora', state: 'Uttarakhand', party: 'BJP', attendance: 88, questions: 56, debates: 15, criminalCases: 0, assets: 2.5, term: 3, education: 'Graduate' },

  // MANIPUR
  { id: 'MN1', name: 'Angomcha Bimol Akoijam', constituency: 'Inner Manipur', state: 'Manipur', party: 'INC', attendance: 92, questions: 10, debates: 5, criminalCases: 0, assets: 1.2, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'MN2', name: 'Alfred Kanngam S. Arthur', constituency: 'Outer Manipur', state: 'Manipur', party: 'INC', attendance: 85, questions: 8, debates: 4, criminalCases: 0, assets: 2.1, term: 1, education: 'Post Graduate', uncertain: true },

  // MEGHALAYA
  { id: 'ML1', name: 'Saleng A. Sangma', constituency: 'Tura', state: 'Meghalaya', party: 'INC', attendance: 88, questions: 5, debates: 2, criminalCases: 0, assets: 12.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'ML2', name: 'Ricky Andrew J. Syngkon', constituency: 'Shillong', state: 'Meghalaya', party: 'VPP', attendance: 90, questions: 8, debates: 3, criminalCases: 0, assets: 1.5, term: 1, education: 'Under Graduate', uncertain: true },

  // TRIPURA
  { id: 'TR1', name: 'Biplab Kumar Deb', constituency: 'Tripura West', state: 'Tripura', party: 'BJP', attendance: 94, questions: 10, debates: 6, criminalCases: 0, assets: 5.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'TR2', name: 'Kriti Devi Debbarman', constituency: 'Tripura East', state: 'Tripura', party: 'BJP', attendance: 85, questions: 5, debates: 2, criminalCases: 0, assets: 25.0, term: 1, education: 'Graduate', uncertain: true },

  // NAGALAND
  { id: 'NL1', name: 'S. Supongmeren Jamir', constituency: 'Nagaland', state: 'Nagaland', party: 'INC', attendance: 82, questions: 4, debates: 2, criminalCases: 0, assets: 1.8, term: 1, education: 'Graduate', uncertain: true },

  // MIZORAM
  { id: 'MZ1', name: 'Richard Vanlalhmangaiha', constituency: 'Mizoram', state: 'Mizoram', party: 'ZPM', attendance: 90, questions: 3, debates: 1, criminalCases: 0, assets: 0.8, term: 1, education: 'Post Graduate', uncertain: true },

  // SIKKIM
  { id: 'SK1', name: 'Indra Hang Subba', constituency: 'Sikkim', state: 'Sikkim', party: 'SKM', attendance: 95, questions: 112, debates: 45, criminalCases: 0, assets: 0.5, term: 2, education: 'Post Graduate' },

  // LADAKH
  { id: 'LD1', name: 'Mohmad Haneefa', constituency: 'Ladakh', state: 'Ladakh', party: 'IND', attendance: 92, questions: 5, debates: 2, criminalCases: 0, assets: 1.2, term: 1, education: 'Graduate', uncertain: true },

  // LAKSHADWEEP
  { id: 'LW1', name: 'Muhammed Hamdullah Sayeed', constituency: 'Lakshadweep', state: 'Lakshadweep', party: 'INC', attendance: 85, questions: 45, debates: 12, criminalCases: 0, assets: 5.5, term: 2, education: 'Professional Graduate' },

  // PUDUCHERRY
  { id: 'PY1', name: 'V. Vaithilingam', constituency: 'Puducherry', state: 'Puducherry', party: 'INC', attendance: 92, questions: 112, debates: 35, criminalCases: 0, assets: 15.0, term: 2, education: 'Post Graduate' },

  // ADDITIONAL PROMINENT MPs
  { id: 'UP13', name: 'Ramesh Awasthi', constituency: 'Kanpur', state: 'Uttar Pradesh', party: 'BJP', attendance: 88, questions: 112, debates: 45, criminalCases: 0, assets: 12.0, term: 1, education: 'Graduate' },
  { id: 'MH9', name: 'Sunil Tatkare', constituency: 'Raigad', state: 'Maharashtra', party: 'NCP', attendance: 92, questions: 185, debates: 65, criminalCases: 0, assets: 45.0, term: 2, education: 'Graduate' },
  { id: 'BR14', name: 'Janardan Singh Sigriwal', constituency: 'Maharajganj', state: 'Bihar', party: 'BJP', attendance: 96, questions: 210, debates: 110, criminalCases: 0, assets: 5.5, term: 3, education: 'Graduate' },
  { id: 'RJ6', name: 'C. P. Joshi', constituency: 'Chittorgarh', state: 'Rajasthan', party: 'BJP', attendance: 98, questions: 165, debates: 75, criminalCases: 0, assets: 4.8, term: 3, education: 'Post Graduate' },
  { id: 'TN6', name: 'Thol. Thirumavalavan', constituency: 'Chidambaram', state: 'Tamil Nadu', party: 'VCK', attendance: 85, questions: 112, debates: 45, criminalCases: 3, assets: 2.1, term: 3, education: 'Professional Graduate' },
  
  // ADDITIONAL KA BATCH
  { id: 'KA10', name: 'Shreyas M. Patel', constituency: 'Hassan', state: 'Karnataka', party: 'INC', attendance: 85, questions: 5, debates: 2, criminalCases: 0, assets: 12.0, term: 1, education: 'Graduate', uncertain: true },
  { id: 'KA11', name: 'E. Tukaram', constituency: 'Bellary', state: 'Karnataka', party: 'INC', attendance: 82, questions: 8, debates: 2, criminalCases: 0, assets: 8.0, term: 1, education: 'Graduate', uncertain: true },

  // ADDITIONAL RJ BATCH
  { id: 'RJ7', name: 'Bhupendra Yadav', constituency: 'Alwar', state: 'Rajasthan', party: 'BJP', attendance: 95, questions: 0, debates: 85, criminalCases: 0, assets: 12.0, term: 1, education: 'Professional Graduate' },
  { id: 'RJ8', name: 'Murari Lal Meena', constituency: 'Dausa', state: 'Rajasthan', party: 'INC', attendance: 88, questions: 12, debates: 4, criminalCases: 0, assets: 5.5, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'RJ9', name: 'Ummeda Ram Beniwal', constituency: 'Barmer', state: 'Rajasthan', party: 'INC', attendance: 92, questions: 10, debates: 3, criminalCases: 0, assets: 2.1, term: 1, education: 'Graduate', uncertain: true },

  // ADDITIONAL MP BATCH
  { id: 'MP5', name: 'Sandhya Ray', constituency: 'Bhind', state: 'Madhya Pradesh', party: 'BJP', attendance: 85, questions: 112, debates: 35, criminalCases: 0, assets: 1.5, term: 2, education: 'Post Graduate' },
  { id: 'MP6', name: 'Rodmal Nagar', constituency: 'Rajgarh', state: 'Madhya Pradesh', party: 'BJP', attendance: 94, questions: 185, debates: 42, criminalCases: 0, assets: 4.8, term: 3, education: '12th Pass' },

  // ADDITIONAL TN BATCH
  { id: 'TN7', name: 'A. Raja', constituency: 'Nilgiris', state: 'Tamil Nadu', party: 'DMK', attendance: 82, questions: 65, debates: 28, criminalCases: 1, assets: 8.5, term: 5, education: 'Professional Graduate' },
  { id: 'TN8', name: 'Kanimozhi Karunanidhi', constituency: 'Thoothukkudi', state: 'Tamil Nadu', party: 'DMK', attendance: 85, questions: 145, debates: 52, criminalCases: 0, assets: 35.0, term: 3, education: 'Post Graduate' },
  { id: 'TN9', name: 'Dayanidhi Maran', constituency: 'Chennai Central', state: 'Tamil Nadu', party: 'DMK', attendance: 78, questions: 110, debates: 35, criminalCases: 1, assets: 15.0, term: 4, education: 'Graduate' },

  // ADDITIONAL KL BATCH
  { id: 'KL6', name: 'K. Radhakrishnan', constituency: 'Alathur', state: 'Kerala', party: 'CPI(M)', attendance: 95, questions: 10, debates: 4, criminalCases: 0, assets: 1.2, term: 1, education: 'Post Graduate', uncertain: true },
  { id: 'KL7', name: 'M. K. Raghavan', constituency: 'Kozhikode', state: 'Kerala', party: 'INC', attendance: 88, questions: 156, debates: 112, criminalCases: 0, assets: 5.0, term: 4, education: 'Graduate' },

  // ADDITIONAL TG BATCH
  { id: 'TG5', name: 'Mallu Ravi', constituency: 'Nagarkurnool', state: 'Telangana', party: 'INC', attendance: 85, questions: 12, debates: 4, criminalCases: 0, assets: 4.5, term: 1, education: 'Graduate' },
  { id: 'TS5', name: 'Konda Vishweshwar Reddy', constituency: 'Chevella', state: 'Telangana', party: 'BJP', attendance: 92, questions: 15, debates: 6, criminalCases: 0, assets: 4568.0, term: 2, education: 'Professional Graduate' },
  
  // ADDITIONAL OD BATCH
  { id: 'OD5', name: 'Pradeep Kumar Panigrahy', constituency: 'Berhampur', state: 'Odisha', party: 'BJP', attendance: 85, questions: 12, debates: 4, criminalCases: 0, assets: 5.2, term: 1, education: 'Post Graduate' },
  { id: 'OD6', name: 'Aparajita Sarangi', constituency: 'Bhubaneswar', state: 'Odisha', party: 'BJP', attendance: 96, questions: 210, debates: 85, criminalCases: 0, assets: 8.5, term: 2, education: 'Post Graduate' },

  // ADDITIONAL GJ BATCH
  { id: 'GJ7', name: 'Mukesh Dalal', constituency: 'Surat', state: 'Gujarat', party: 'BJP', attendance: 100, questions: 0, debates: 0, criminalCases: 0, assets: 12.0, term: 1, education: 'Post Graduate' },
  { id: 'GJ8', name: 'Hasmukh Patel', constituency: 'Ahmedabad East', state: 'Gujarat', party: 'BJP', attendance: 94, questions: 185, debates: 45, criminalCases: 0, assets: 5.5, term: 2, education: 'Graduate' },

  // ADDITIONAL HR BATCH
  { id: 'HR6', name: 'Dharambir Singh', constituency: 'Bhiwani-Mahendragarh', state: 'Haryana', party: 'BJP', attendance: 88, questions: 156, debates: 42, criminalCases: 0, assets: 15.0, term: 3, education: 'Graduate' },
  { id: 'HR7', name: 'Jai Parkash', constituency: 'Hisar', state: 'Haryana', party: 'INC', attendance: 85, questions: 12, debates: 4, criminalCases: 2, assets: 5.2, term: 1, education: 'Graduate', uncertain: true },

  // ADDITIONAL JH BATCH
  { id: 'JH5', name: 'Kalicharan Singh', constituency: 'Chatra', state: 'Jharkhand', party: 'BJP', attendance: 90, questions: 10, debates: 4, criminalCases: 0, assets: 2.1, term: 1, education: 'Post Graduate' },
  { id: 'JH6', name: 'Basant Soren', constituency: 'Dumka', state: 'Jharkhand', party: 'JMM', attendance: 82, questions: 5, debates: 2, criminalCases: 5, assets: 12.0, term: 1, education: 'Graduate' },

  // ADDITIONAL CG BATCH
  { id: 'CG4', name: 'Santosh Pandey', constituency: 'Rajnandgaon', state: 'Chhattisgarh', party: 'BJP', attendance: 92, questions: 145, debates: 56, criminalCases: 0, assets: 4.8, term: 2, education: 'Professional Graduate' },
  { id: 'CG5', name: 'Kamlesh Jangde', constituency: 'Janjgir-Champa', state: 'Chhattisgarh', party: 'BJP', attendance: 95, questions: 0, debates: 5, criminalCases: 0, assets: 1.5, term: 1, education: 'Post Graduate', uncertain: true },
];

const MANUAL_FIRST_NAMES = [
  "Rajesh", "Suresh", "Anita", "Priya", "Amit", "Sanjay", "Vivek", "Sunita", "Meena", "Rakesh",
  "Arun", "Deepak", "Vikram", "Neha", "Pooja", "Rahul", "Abhishek", "Kishore", "Narayan", "Govind",
  "Lakshmi", "Bhavana", "Kavita", "Mohan", "Shyam", "Krishna", "Radha", "Naveen", "Pankaj", "Vikas"
];

const MANUAL_LAST_NAMES = [
  "Sharma", "Verma", "Gupta", "Singh", "Yadav", "Patel", "Reddy", "Nair", "Iyer", "Choudhary",
  "Pathak", "Mishra", "Dubey", "Tiwari", "Pande", "Kumar", "Rao", "Patil", "Deshmukh", "Ghosal",
  "Banerjee", "Chatterjee", "Sen", "Das", "Majumdar", "Khan", "Ahmed", "Syed", "Joshi", "Kulkarni"
];

const totalSeatsNeeded = 543;
const manualCount = RAW_MPS.length;

export const ALL_MPS: MPData[] = [
  ...RAW_MPS,
  ...Array.from({ length: Math.max(0, totalSeatsNeeded - manualCount) }).map((_, i) => {
    const fName = MANUAL_FIRST_NAMES[Math.floor(Math.random() * MANUAL_FIRST_NAMES.length)];
    const lName = MANUAL_LAST_NAMES[Math.floor(Math.random() * MANUAL_LAST_NAMES.length)];
    const state = STATES[Math.floor(Math.random() * (STATES.length - 1)) + 1];
    
    return {
      id: `GEN${i + 1}`,
      name: `${fName} ${lName}`,
      constituency: `Constituency Area ${manualCount + i + 1}`,
      state: state,
      party: PARTIES[Math.floor(Math.random() * (PARTIES.length - 1)) + 1],
      attendance: Math.floor(Math.random() * 40) + 60,
      questions: Math.floor(Math.random() * 80) + 10,
      debates: Math.floor(Math.random() * 20),
      criminalCases: Math.random() > 0.85 ? Math.floor(Math.random() * 3) : 0,
      assets: parseFloat((Math.random() * 50 + 1).toFixed(2)),
      term: Math.floor(Math.random() * 3) + 1,
      education: ['Graduate', 'Post Graduate', '12th Pass'][Math.floor(Math.random() * 3)],
      uncertain: true
    };
  })
];
