package br.com.bantads.ms_commons.dto;

import java.io.Serializable;

public class AlterarUsuarioGerenteDTO implements Serializable {

    private String loginAntigo;
    private String loginNovo;
    private String nomeNovo;

    public AlterarUsuarioGerenteDTO() {
        super();
    }

    public AlterarUsuarioGerenteDTO(String loginAntigo, String loginNovo, String nomeNovo) {
        this.loginAntigo = loginAntigo;
        this.loginNovo = loginNovo;
        this.nomeNovo = nomeNovo;
    }

    public String getLoginAntigo() {
        return loginAntigo;
    }

    public void setLoginAntigo(String loginAntigo) {
        this.loginAntigo = loginAntigo;
    }

    public String getLoginNovo() {
        return loginNovo;
    }

    public void setLoginNovo(String loginNovo) {
        this.loginNovo = loginNovo;
    }

    public String getNomeNovo() {
        return nomeNovo;
    }

    public void setNomeNovo(String nomeNovo) {
        this.nomeNovo = nomeNovo;
    }

}
