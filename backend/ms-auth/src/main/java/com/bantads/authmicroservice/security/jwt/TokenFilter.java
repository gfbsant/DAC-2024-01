package com.bantads.authmicroservice.security.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import java.io.IOException;

public class TokenFilter extends GenericFilterBean {

    private TokenService tokenProvider;

    public TokenFilter(TokenService tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;

        //filtro sera executado a cada requisicao
        String token = tokenProvider.resolveToken(httpServletRequest); //obtem o token a partir do request
        if (token != null && tokenProvider.validateToken(token)) {
            Authentication auth = tokenProvider.getAuthentication(token); //obtem a autenticacao a partir do token
            if (auth != null) {
                SecurityContextHolder.getContext().setAuthentication(auth); //seta a autenticacao no contexto do spring
            }
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }
}
