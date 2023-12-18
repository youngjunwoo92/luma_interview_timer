export default function formatTime(timer){
    const ms =  ((timer / 10) % 100).toFixed(0);
    const s = Math.floor((timer / 1000) % 60);
    const m = Math.floor((timer / 60000) % 60);
  
    // return `${m < 10 ? `0${m}` : m} : ${s < 10 ? `0${s}` : s} : ${ms < 10 ? `0${ms}` : ms}`

    return [`${m < 10 ? `0${m}` : m}`, `${s < 10 ? `0${s}` : s}`, `${ms < 10 ? `0${ms}` : ms}`];
  }
  