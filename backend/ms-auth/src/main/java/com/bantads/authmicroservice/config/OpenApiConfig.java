package com.bantads.authmicroservice.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI().info(new Info()
                .title("RESTful API With Spring Boot 3.2.4")
                .version("v1").
                description("Bantads API for Login").
                termsOfService("")
                .license(new License()
                        .name("Apache 2.0")
                        .url("http://springdoc.org")
                )
        );

    }


}
