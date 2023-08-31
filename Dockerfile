# 도커 허브에서 이미지를 가져와서 이미지를 작업한다
# FROM (이미지 이름:버전)
# FROM node:14.15.4
FROM node:16.16.0

# 컨테이너 실행 전 작동할 명령
# RUN (명령)
# 타임존 설정 (설정을 하지 않으면 시간 저장시 다른 시간대로 저장됨)
RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
RUN echo Asia/Seoul > /etc/timezone

# 컨테이너 내 작업 경로
# WORKDIR (경로)
WORKDIR /app

# 작업 파일을 컨테이너로 복사
# COPY (파일명 또는 ${변수명}) (복사할 파일명)
# app dependencies, install 및 caching
COPY . .

# 컨테이너 실행 전 작동할 명령
# RUN (명령)
RUN yarn install

# 이미지 내부 환경 설정
# ENV (타겟) (내용)
# `/app/node_modules/.bin`을 $PATH 에 추가
# (bin폴더를 찾기 어려울 수 있으므로 환경변수에 추가해줌)
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn build

# dist를 지웠을 경우
RUN yarn generate 
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# 컨테이너 시작 시 내릴 명령 (CMD와 ENTRYPOINT 차이 확인)
# ENTRYPOINT [(명령),(매개변수),(매개변수),(...)]
CMD ["yarn", "start"]
