package com.daniel.modulo03.exceptions;

public class UserFoundException extends RuntimeException {
    public UserFoundException() {
        super("Usuário já existe");
    }
    
}
