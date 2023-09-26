import moment from "moment";
import { useState } from "react";
import arrow from "./images/icon-arrow.svg";
const Component = () => {
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [totalDays, setTotalDays] = useState("--");
  const [totalMonths, setTotalMonths] = useState("--");
  const [totalYears, setTotalYears] = useState("--");
  const [isValid, setIsValid] = useState(true);

  const handleDayChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 2);
    setDay(newValue);
  };

  const handleMonthChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 2);
    setMonth(newValue);
  };

  const handleYearChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    setYear(newValue);
  };

  const handleAge = (e) => {
    try {
      if (!day || !month || !year) {
        throw new Error("Please provide valid day, month, and year.");
      }

      const currentDate = moment();
      const birthDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");

      if (!birthDate.isValid()) {
        throw new Error("Invalid date format or values.");
      }

      const duration = moment.duration(currentDate.diff(birthDate));
      setTotalYears(duration.years());
      setTotalMonths(duration.months());
      setTotalDays(duration.days());
      setDay("");
      setMonth("");
      setYear("");
      setIsValid(true);
    } catch (err) {
      window.alert(err.message);
      setIsValid(false);
    }
  };

  return (
    <>
      <div
        className="bg-white h-[65%] xl:w-[45%] lg:w-2/4 sm:w-5/6 rounded-t-3xl rounded-l-3xl md:rounded-br-[200px] 
        sm:rounded-br-[100px] dark:bg-teal-400 flex flex-col justify-center">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="p-10 flex flex-row space-x-10 h-[50%] w-[70%] mr-36">
            <label htmlFor="" className="flex flex-col h-full">
              <span className="mb-1 tracking-[0.3rem] font-semibold">DAY</span>
              <input
                className="text-black p-5 w-full xl:w-full lg:w-3/4 md:w-1/2 h-full bg-white dark:bg-teal-400 border 
              border-black border-opacity-[50%] rounded-lg font-bold"
                type="text"
                name="day"
                value={day}
                onChange={handleDayChange}
                placeholder="DD"
                required
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span className="mb-1 tracking-[0.3rem] font-semibold">
                MONTH
              </span>
              <input
                className="text-black p-5 w-full xl:w-full lg:w-3/4 md:w-1/2 h-full bg-white dark:bg-teal-400 border 
              border-black border-opacity-[50%] rounded-lg font-bold"
                type="text"
                name="month"
                value={month}
                onChange={handleMonthChange}
                placeholder="MM"
                required
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span className="mb-1 tracking-[0.3rem] font-semibold">YEAR</span>
              <input
                className="text-black p-5 w-full xl:w-full lg:w-3/4 md:w-1/2 h-full bg-white dark:bg-teal-400 border 
              border-black border-opacity-[50%] rounded-lg font-bold"
                type="text"
                name="year"
                value={year}
                onChange={handleYearChange}
                placeholder="YYYY"
                required
              />
            </label>
          </div>
          {!isValid && (
            <div className="text-red-600 text-sm ml-10">
              Please enter valid values.
            </div>
          )}
          <div class="flex justify-end mt-3">
            <div class="mt-10 w-[80%] border-t border-gray-400" />
            <button
              class="mr-12 flex p-5 sm:p-1/2 bg-[#864CFF] text-white rounded-full hover:bg-[#AE87FF] active:bg-black"
              onClick={() => handleAge()}>
              <img src={arrow} alt="btn" />
            </button>
          </div>
        </form>
        <div className="ml-12">
          <div className="font-bold text-8xl italic text-[#834CFE]">
            {totalYears}{" "}
            <span className="text-black">
              {parseInt(totalYears) === 1 || typeof totalYears === "string"
                ? " year"
                : " years"}
            </span>
          </div>
          <div className="font-bold text-8xl italic text-[#834CFE]">
            {totalMonths}
            <span className="text-black">
              {parseInt(totalMonths) === 1 || typeof totalMonths === "string"
                ? " month"
                : " months"}
            </span>
          </div>
          <div className="font-bold text-8xl italic text-[#834CFE]">
            {totalDays}{" "}
            <span className="text-black">
              {parseInt(totalDays) === 1 || typeof totalDays === "string"
                ? " day"
                : " days"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
