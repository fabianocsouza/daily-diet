import { useDiet } from "@hooks/useDiet";
import { StatusDietDTO } from "@dtos/StatusDietDTO";

export function generalStatistics() {
  const { data } = useDiet();

  let currentSequenceLength = 0;
  let maxSequenceLength = 0;
  let positive = 0;
  let negative = 0;
  let total = 0;

  data.forEach((day) => {    
    day.data.forEach(item => {
      if(item.status){
        positive++
        currentSequenceLength++
        maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);
      }else{
        currentSequenceLength = 0;
        negative++
      }
      total++
    });
  });

  const percent = (positive / total) * 100 || 0;
  const totalStatus: StatusDietDTO = {
    positive: positive,
    negative: negative,
    total: total,
    percent: percent,
    bestSequence: maxSequenceLength
  }
    
  return totalStatus;
}