FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY PresenceServer.java .
RUN javac PresenceServer.java
ENV PORT=7860
CMD ["java", "-cp", "/app", "PresenceServer"]
