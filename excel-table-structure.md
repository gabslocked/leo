# 📊 Tabela Excel/Google Sheets - Formulário de Contato Leo Siqueira

## 🎯 Estrutura Completa para Planilha

### **Cabeçalhos da Planilha (Linha 1)**

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **ID** | **Data/Hora** | **Nome** | **Email** | **Telefone** | **Cidade** | **Instituição** | **Cargo** | **Motivo Contato** | **Sub-categoria** | **Mensagem** | **WhatsApp** | **Newsletter** | **Aceita Termos** | **User Agent** | **Versão Form** | **Status** | **Observações** |

### **Descrição dos Campos**

| Campo | Coluna | Tipo | Descrição | Valores Possíveis |
|-------|--------|------|-----------|-------------------|
| **ID** | A | Número | Identificador único sequencial | 1, 2, 3... |
| **Data/Hora** | B | Data/Hora | Timestamp da submissão | 2025-01-29 14:30:00 |
| **Nome** | C | Texto | Nome completo do usuário | João Silva |
| **Email** | D | Email | Email do usuário | joao@email.com |
| **Telefone** | E | Texto | Telefone com DDD | (63) 99999-9999 |
| **Cidade** | F | Texto | Cidade do usuário | Palmas - TO |
| **Instituição** | G | Texto | Instituição (opcional) | Câmara Municipal |
| **Cargo** | H | Texto | Cargo/Função (opcional) | Vereador |
| **Motivo Contato** | I | Texto | Razão principal do contato | reclamacao, emendas, conversa |
| **Sub-categoria** | J | Texto | Sub-categoria quando aplicável | reclamacao, pedido, sugestao, elogio |
| **Mensagem** | K | Texto Longo | Mensagem detalhada do usuário | Texto livre |
| **WhatsApp** | L | Texto | Deseja receber conteúdo WhatsApp | sim, nao |
| **Newsletter** | M | Texto | Deseja receber newsletter | sim, nao |
| **Aceita Termos** | N | Booleano | Aceitou termos LGPD | TRUE, FALSE |
| **User Agent** | O | Texto | Navegador/dispositivo usado | Mozilla/5.0... |
| **Versão Form** | P | Texto | Versão do formulário | 2.0 |
| **Status** | Q | Texto | Status do atendimento | Novo, Em Andamento, Concluído |
| **Observações** | R | Texto | Observações internas da equipe | Texto livre |

### **Exemplo de Dados (Linhas 2-5)**

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 29/01/2025 14:30 | João Silva | joao@email.com | (63) 99999-9999 | Palmas - TO | Câmara Municipal | Vereador | reclamacao | pedido | Solicito melhorias na iluminação pública do bairro... | sim | sim | TRUE | Mozilla/5.0 Chrome | 2.0 | Novo | - |
| 2 | 29/01/2025 15:45 | Maria Santos | maria@email.com | (63) 88888-8888 | Araguaína - TO | - | - | emendas | - | Gostaria de solicitar emenda para construção de praça... | sim | nao | TRUE | Mozilla/5.0 Safari | 2.0 | Novo | - |
| 3 | 29/01/2025 16:20 | Carlos Oliveira | carlos@email.com | (63) 77777-7777 | Gurupi - TO | ONG Ambiental | Coordenador | conversa | - | Interesse em discutir políticas ambientais... | nao | sim | TRUE | Mozilla/5.0 Firefox | 2.0 | Novo | - |
| 4 | 29/01/2025 17:10 | Ana Costa | ana@email.com | (63) 66666-6666 | Porto Nacional - TO | - | - | reclamacao | elogio | Parabenizo pelo excelente trabalho na área da saúde... | sim | sim | TRUE | Mozilla/5.0 Edge | 2.0 | Novo | - |

### **Formatação Sugerida para Excel**

#### **Cores dos Cabeçalhos:**
- **Fundo:** Azul escuro (#0A1F44)
- **Texto:** Branco (#FFFFFF)
- **Negrito:** Sim

#### **Formatação Condicional por Motivo de Contato:**
- **Reclamação:** Fundo amarelo claro (#FFF3CD)
- **Emendas:** Fundo azul claro (#D1ECF1)
- **Conversa:** Fundo verde claro (#D4EDDA)

#### **Formatação Condicional por Status:**
- **Novo:** Fundo verde (#28A745), texto branco
- **Em Andamento:** Fundo laranja (#FFC107), texto preto
- **Concluído:** Fundo cinza (#6C757D), texto branco

#### **Larguras de Coluna Sugeridas:**
- A (ID): 50px
- B (Data/Hora): 150px
- C (Nome): 200px
- D (Email): 250px
- E (Telefone): 150px
- F (Cidade): 150px
- G (Instituição): 200px
- H (Cargo): 150px
- I (Motivo): 120px
- J (Sub-categoria): 120px
- K (Mensagem): 400px
- L (WhatsApp): 80px
- M (Newsletter): 80px
- N (Termos): 80px
- O (User Agent): 300px
- P (Versão): 80px
- Q (Status): 120px
- R (Observações): 300px

### **Fórmulas Úteis para Excel**

#### **Contador de Submissões por Motivo:**
```excel
=COUNTIF(I:I,"reclamacao")  // Conta reclamações
=COUNTIF(I:I,"emendas")     // Conta pedidos de emendas
=COUNTIF(I:I,"conversa")    // Conta pedidos de conversa
```

#### **Percentual de Aceitação WhatsApp:**
```excel
=COUNTIF(L:L,"sim")/COUNTA(L:L)*100
```

#### **Percentual de Aceitação Newsletter:**
```excel
=COUNTIF(M:M,"sim")/COUNTA(M:M)*100
```

#### **Filtro por Data (Últimos 30 dias):**
```excel
=FILTER(A:R, B:B>=TODAY()-30)
```

### **Validação de Dados Sugerida**

#### **Coluna I (Motivo Contato):**
- Lista: reclamacao, emendas, conversa

#### **Coluna J (Sub-categoria):**
- Lista: reclamacao, pedido, sugestao, elogio

#### **Coluna L (WhatsApp):**
- Lista: sim, nao

#### **Coluna M (Newsletter):**
- Lista: sim, nao

#### **Coluna Q (Status):**
- Lista: Novo, Em Andamento, Concluído, Arquivado

### **Dashboard Resumo (Planilha Separada)**

| Métrica | Fórmula | Resultado |
|---------|---------|-----------|
| **Total de Submissões** | `=COUNTA(Dados!A:A)-1` | 150 |
| **Reclamações** | `=COUNTIF(Dados!I:I,"reclamacao")` | 75 |
| **Pedidos de Emendas** | `=COUNTIF(Dados!I:I,"emendas")` | 45 |
| **Pedidos de Conversa** | `=COUNTIF(Dados!I:I,"conversa")` | 30 |
| **Taxa WhatsApp** | `=COUNTIF(Dados!L:L,"sim")/COUNTA(Dados!L:L)*100` | 85% |
| **Taxa Newsletter** | `=COUNTIF(Dados!M:M,"sim")/COUNTA(Dados!M:L)*100` | 78% |
| **Submissões Hoje** | `=COUNTIFS(Dados!B:B,">="&TODAY(),Dados!B:B,"<"&TODAY()+1)` | 12 |
| **Pendentes** | `=COUNTIF(Dados!Q:Q,"Novo")` | 25 |

### **Instruções de Implementação**

1. **Criar nova planilha** no Google Sheets ou Excel
2. **Copiar os cabeçalhos** da primeira tabela para a linha 1
3. **Aplicar formatação** conforme sugerido acima
4. **Configurar validação de dados** nas colunas especificadas
5. **Criar formatação condicional** para status e motivos
6. **Adicionar fórmulas** de resumo em planilha separada
7. **Configurar webhook** do backend para escrever nesta estrutura

Esta estrutura permite análise completa dos dados do formulário e facilita o acompanhamento das demandas recebidas!
