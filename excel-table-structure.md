# 📊 Tabela Excel/Google Sheets - Formulário de Contato Leo Siqueira

## 🎯 Estrutura Completa para Planilha

### **Cabeçalhos da Planilha (Linha 1)**

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **ID** | **Data** | **Hora** | **Nome** | **Email** | **Telefone** | **Cidade** | **Instituição** | **Cargo** | **Tipo Contato** | **Título/Tema** | **Descrição** | **WhatsApp** | **Newsletter** | **Aceita Termos** | **User Agent** | **Status** | **Observações** |

### **Descrição dos Campos**

| Campo | Coluna | Tipo | Descrição | Valores Possíveis |
|-------|--------|------|-----------|-------------------|
| **ID** | A | Número | Identificador único sequencial | 1, 2, 3... |
| **Data** | B | Data | Data da submissão | 29/01/2025 |
| **Hora** | C | Hora | Hora da submissão | 14:30:15 |
| **Nome** | D | Texto | Nome completo do usuário | João Silva |
| **Email** | E | Email | Email do usuário | joao@email.com |
| **Telefone** | F | Texto | Telefone com DDD | (63) 99999-9999 |
| **Cidade** | G | Texto | Cidade do usuário | Palmas - TO |
| **Instituição** | H | Texto | Instituição (opcional) | Câmara Municipal |
| **Cargo** | I | Texto | Cargo/Função (opcional) | Vereador |
| **Tipo Contato** | J | Texto | Tipo principal de contato | Reclamacao, Apoio, PedidoEmenda, MarcarConversa |
| **Título/Tema** | K | Texto | Título ou tema do contato | Texto livre ou "Não informado" |
| **Descrição** | L | Texto Longo | Descrição detalhada do usuário | Texto livre |
| **WhatsApp** | M | Texto | Deseja receber conteúdo WhatsApp | sim, nao |
| **Newsletter** | N | Texto | Deseja receber newsletter | sim, nao |
| **Aceita Termos** | O | Booleano | Aceitou termos LGPD | TRUE, FALSE |
| **User Agent** | P | Texto | Navegador/dispositivo usado | Mozilla/5.0... |
| **Status** | Q | Texto | Status do atendimento | Novo, Em Andamento, Concluído |
| **Observações** | R | Texto | Observações internas da equipe | Texto livre |

### **Exemplo de Dados (Linhas 2-5)**

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 29/01/2025 | 14:30:15 | João Silva | joao@email.com | (63) 99999-9999 | Palmas - TO | Câmara Municipal | Vereador | Reclamacao | Não informado | Solicito melhorias na iluminação pública do bairro... | sim | sim | TRUE | Mozilla/5.0 Chrome | Novo | - |
| 2 | 29/01/2025 | 15:45:22 | Maria Santos | maria@email.com | (63) 88888-8888 | Araguaína - TO | - | - | PedidoEmenda | Construção de praça | Gostaria de solicitar emenda para construção de praça no bairro central... | sim | nao | TRUE | Mozilla/5.0 Safari | Novo | - |
| 3 | 29/01/2025 | 16:20:10 | Carlos Oliveira | carlos@email.com | (63) 77777-7777 | Gurupi - TO | ONG Ambiental | Coordenador | MarcarConversa | Políticas ambientais | Interesse em discutir políticas ambientais para a região... | nao | sim | TRUE | Mozilla/5.0 Firefox | Novo | - |
| 4 | 29/01/2025 | 17:10:33 | Ana Costa | ana@email.com | (63) 66666-6666 | Porto Nacional - TO | - | - | Apoio | Não informado | Parabenizo pelo excelente trabalho na área da saúde... | sim | sim | TRUE | Mozilla/5.0 Edge | Novo | - |

### **Formatação Sugerida para Excel**

#### **Cores dos Cabeçalhos:**
- **Fundo:** Azul escuro (#0A1F44)
- **Texto:** Branco (#FFFFFF)
- **Negrito:** Sim

#### **Formatação Condicional por Tipo de Contato:**
- **Reclamacao:** Fundo amarelo claro (#FFF3CD)
- **Apoio:** Fundo verde claro (#D4EDDA)
- **PedidoEmenda:** Fundo azul claro (#D1ECF1)
- **MarcarConversa:** Fundo roxo claro (#E2E3FF)

#### **Formatação Condicional por Status:**
- **Novo:** Fundo verde (#28A745), texto branco
- **Em Andamento:** Fundo laranja (#FFC107), texto preto
- **Concluído:** Fundo cinza (#6C757D), texto branco

#### **Larguras de Coluna Sugeridas:**
- A (ID): 50px
- B (Data): 100px
- C (Hora): 80px
- D (Nome): 200px
- E (Email): 250px
- F (Telefone): 150px
- G (Cidade): 150px
- H (Instituição): 200px
- I (Cargo): 150px
- J (Tipo Contato): 120px
- K (Título/Tema): 200px
- L (Descrição): 400px
- M (WhatsApp): 80px
- N (Newsletter): 80px
- O (Termos): 80px
- P (User Agent): 300px
- Q (Status): 120px
- R (Observações): 300px

### **Fórmulas Úteis**

#### **Contagem por Tipo de Contato (Coluna J):**
```excel
=COUNTIF(J:J,"Reclamacao")
=COUNTIF(J:J,"Apoio")
=COUNTIF(J:J,"PedidoEmenda")
=COUNTIF(J:J,"MarcarConversa")
```

#### **Contagem por Status (Coluna Q):**
```excel
=COUNTIF(Q:Q,"Novo")
=COUNTIF(Q:Q,"Em Andamento")
=COUNTIF(Q:Q,"Concluído")
```

#### **Percentual de Aceitação WhatsApp:**
```excel
=COUNTIF(M:M,"sim")/COUNTA(M:M)*100
```

#### **Percentual de Aceitação Newsletter:**
```excel
=COUNTIF(N:N,"sim")/COUNTA(N:N)*100
```

#### **Filtro por Data (Últimos 30 dias):**
```excel
=FILTER(A:R, B:B>=TODAY()-30)
```

### **Validação de Dados**

#### **Coluna J (Tipo Contato) - Lista Suspensa:**
- Valores permitidos: `Reclamacao`, `Apoio`, `PedidoEmenda`, `MarcarConversa`

#### **Coluna M (WhatsApp) - Lista Suspensa:**
- Valores permitidos: `sim`, `nao`

#### **Coluna N (Newsletter) - Lista Suspensa:**
- Valores permitidos: `sim`, `nao`

#### **Coluna Q (Status) - Lista Suspensa:**
- Valores permitidos: `Novo`, `Em Andamento`, `Concluído`, Arquivado

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
