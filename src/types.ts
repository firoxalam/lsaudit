export interface MPData {
  id: string;
  name: string;
  constituency: string;
  state: string;
  party: string;
  attendance: number;
  questions: number;
  debates: number;
  criminalCases: number;
  assets: number;
  term: number;
  education: string;
  uncertain?: boolean;
}
