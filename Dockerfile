FROM eclipse-temurin:17

WORKDIR /app
COPY . .
RUN ./mvnw package -DskipTests && cp target/*.jar /app/springboot-docker.jar


ENTRYPOINT ["java" ,"-jar","springboot-docker.jar"]