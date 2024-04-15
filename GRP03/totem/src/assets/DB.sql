CREATE TABLE senhas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sg_tipo VARCHAR(2) NOT NULL,
    id_tipo_senha INT,
    numero VARCHAR(10) NOT NULL,
    data_emissao DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE atendimentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_senha INT NOT NULL,
    guiche INT NOT NULL,
    data_atendimento DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_senha) REFERENCES senhas(id)
);

CREATE TABLE tipo(
id INT AUTO_INCREMENT PRIMARY KEY,
nm_tipo VARCHAR (100),
sg_tipo VARCHAR (2)
);

INSERT INTO tipo(nm_tipo, sg_tipo) VALUES
('Senha Geral' , 'SG'),
('Senha Prefencial', 'SP'),
('Senha Exame', 'SE')
