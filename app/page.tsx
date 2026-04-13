export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        그래서 이제 뭐함?
      </h1>
      <p className="text-gray-600 mb-8">
        AI 기반 일정 관리 시스템
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            오늘의 핵심 일정
          </h2>
          <p className="text-sm text-gray-600">
            오전 수업, 오후 과제, 저녁 운동 일정이 배정되어 있습니다.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            마감 임박 과제
          </h2>
          <p className="text-sm text-gray-600">
            네트워크 과제 제출까지 2일 남았습니다.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            AI 추천
          </h2>
          <p className="text-sm text-gray-600">
            오늘은 수업 후 1시간 휴식 뒤 운동을 진행하는 것을 추천합니다.
          </p>
        </div>
      </div>
    </div>
  );
}