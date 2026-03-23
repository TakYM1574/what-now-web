from fastapi import FastAPI

#메인 코드 판
# 테스트상태. 

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "그래서 이제 뭐함? 백엔드 서버 가동 중!"}

@app.get("/recommend")
def get_recommendation(free_time_min: int):
    # 간단한 추천 로직 예시
    if free_time_min >= 60:
        return {"action": "전공 과제 하기", "location": "도서관"}
    else:
        return {"action": "단어 암기하기", "location": "어디서나"}
    


    # 유저의 고정 스케줄 예시 (월요일 기준)
monday_schedule = [
    {"name": "전공 수업", "start": "09:00", "end": "12:00"},
    {"name": "점심 식사", "start": "12:00", "end": "13:00"},
    {"name": "교양 수업", "start": "15:00", "end": "17:00"}
]

# 할 일 리스트 (D-Day와 예상 소요시간 포함)
todo_list = [
    {"task": "알고리즘 과제", "duration": 60, "d_day": 3},
    {"task": "영단어 암기", "duration": 20, "d_day": 7}
]

# db 예시
# 1. 유저 정보 (Users)
user_profile = {
    "id": 1,
    "name": "나노드",
    "wake_up": "08:00",
    "sleep_at": "23:00"
}

# 2. 고정 일정 (Schedules) - 월요일 기준
monday_schedules = [
    {"title": "캡스톤 디자인 수업", "start": "13:00", "end": "15:00"},
    {"title": "편의점 아르바이트", "start": "18:00", "end": "22:00"}
]

# 3. 할 일 목록 (Tasks)
todo_tasks = [
    {"task": "알고리즘 과제", "time_cost": 60, "d_day": 3},
    {"task": "영단어 50개 암기", "time_cost": 20, "d_day": 7},
    {"task": "방 청소하기", "time_cost": 30, "d_day": 1}
]