import {CapybaraType} from "./types";
import ChillModel from './models/Chill_lvl_0_emb';
import Baby from './models/Baby_1_lvl_1';
import BeginnerModel from './models/Beginner_2_lvl_4_emb';
import Explorer from './models/Explorer_2_lvl_6';
import BStudent from './models/B_student_2_lvl_8';
import AStudentModel from './models/A_student_2_lvl_10_emb';
import ApplicantLvl13 from './models/Applicant_lvl_13_emb';
import Student from './models/Student_lvl_14';
import Expert from './models/Expert_2_lvl_16';
import LegendLvl19 from './models/Legend_lvl_19_emb';

const CAPYBARA_MODEL = {
  [CapybaraType.Chill]: ChillModel,
  [CapybaraType.Baby1]: Baby,
  [CapybaraType.Beginner1]: BeginnerModel,
  [CapybaraType.Explorer1]: Explorer,
  [CapybaraType.BStudent1]: BStudent,
  [CapybaraType.AStudent1]: AStudentModel,
  [CapybaraType.Applicant]: ApplicantLvl13,
  [CapybaraType.Student]: Student,
  [CapybaraType.Expert1]: Expert,
  [CapybaraType.Legend]: LegendLvl19
};

export default CAPYBARA_MODEL
