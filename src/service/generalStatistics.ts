import { StatusDietDTO } from "src/dtos/StatusDietDTO";
import { useAuth } from "src/hooks/useAuth";


export function generalStatistics() {
  const { data } = useAuth();

  const totalStatus = data.reduce<StatusDietDTO>((counts, item) => {
    let currentSequenceLength = 0;
    let maxSequenceLength = 0;
    
    item.data.forEach(obj => {
      if(obj.status){
        counts.positive++
        currentSequenceLength++
        maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);
      }else{
        currentSequenceLength = 0
        counts.negative++
      }
      counts.total++
      counts.bestSequence = maxSequenceLength;
    })
    counts.percent = ((counts.positive / counts.total) * 100);
    
    return counts;
  }, {positive: 0, negative: 0, total: 0, percent: 0, bestSequence: 0});

  return totalStatus;
}