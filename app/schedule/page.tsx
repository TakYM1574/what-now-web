export default function SchedulePage() {
  const days = ["월", "화", "수", "목", "금"];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        주간 시간표
      </h1>

      <div className="grid grid-cols-5 gap-6">
        {days.map((day) => (
          <div
            key={day}
            className="bg-white p-4 rounded-xl shadow-sm"
          >
            <h2 className="font-bold mb-3 text-gray-700">
              {day}
            </h2>

            {/* 수업 */}
            <div className="bg-blue-100 text-blue-800 p-3 mb-2 rounded-lg font-medium">
              수업 10:00
            </div>

            {/* 운동 */}
            <div className="bg-green-100 text-green-800 p-3 mb-2 rounded-lg font-medium">
              운동 18:00
            </div>

            {/* 과제 */}
            <div className="bg-red-100 text-red-800 p-3 rounded-lg font-medium">
              과제
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}