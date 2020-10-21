import React, { useEffect, useState } from 'react';
import ListMore from "./ListMore"
import { fetchData } from "../../store/api/Api"
export default({name}) => {
  const [onData, setOnData] = useState([])
  const [num, setNum] = useState(1);
  function onScroll() {
    let sTop = document.documentElement.scrollTop;
    let cTop = document.documentElement.clientHeight;
    let hTop = document.documentElement.scrollHeight;
    if (hTop == sTop + cTop) {
      setNum((cur) => cur + 1);
    }
  }
  const onScrollfatchData = async () => {
    const result = await fetchData(name, num)
    const NewArray = result.data.results
    console.log("제발 떠라 진짜 ㅡㅡ",NewArray)
    const array = NewArray.filter(item => {
      return item.backdrop_path !== null
    })
    setOnData([...onData, ...array])
  }
  useEffect(() => {
    onScrollfatchData()
    window.addEventListener("scroll", onScroll)
  },[num])

  return onData && <ListMore onData={onData} name={name} />
}
