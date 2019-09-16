
export class Quest {
  id: number;
  description: string;
  answer: string;
  optionAnswer ?: {
    answer1: string,
    answer2: string,
    answer3: string,
    answer4: string
  };
  optionImgAnswer ?: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
  video ?: String;
}
