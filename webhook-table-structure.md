# 📊 Dynamic Table Structure for Leo Siqueira Contact Form

## 🎯 Complete Form Data Capture

### **Primary Fields Table**
```sql
CREATE TABLE contact_submissions (
    id SERIAL PRIMARY KEY,
    
    -- Basic Information
    nome VARCHAR(255) NOT NULL,
    instituicao VARCHAR(255),
    cargo VARCHAR(255),
    cidade VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    
    -- Contact Reason & Sub-selections
    motivo_contato VARCHAR(50) NOT NULL, -- 'reclamacao', 'emendas', 'conversa'
    sub_reclamacao VARCHAR(50), -- 'reclamacao', 'pedido', 'sugestao', 'elogio'
    mensagem TEXT,
    
    -- Communication Preferences
    whatsapp_conteudo VARCHAR(10) DEFAULT 'sim', -- 'sim' or 'nao'
    newsletter VARCHAR(10) DEFAULT 'sim', -- 'sim' or 'nao'
    
    -- Terms and Consent
    aceita_termos BOOLEAN DEFAULT TRUE,
    
    -- Metadata
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    form_version VARCHAR(10) DEFAULT '2.0',
    
    -- Indexes for better performance
    INDEX idx_motivo_contato (motivo_contato),
    INDEX idx_timestamp (timestamp),
    INDEX idx_email (email)
);
```

## 🔄 Dynamic Data Processing Logic

### **JavaScript/Node.js Webhook Handler**
```javascript
// webhook-handler.js
const express = require('express');
const app = express();

app.post('/webhook/contato', (req, res) => {
    const formData = req.body;
    
    // Dynamic field mapping based on contact reason
    const processedData = {
        // Always capture basic info
        ...extractBasicInfo(formData),
        
        // Dynamic processing based on contact type
        ...processContactReason(formData),
        
        // Communication preferences with defaults
        ...processPreferences(formData),
        
        // Metadata
        timestamp: new Date().toISOString(),
        processed_at: new Date(),
        ip_address: req.ip
    };
    
    // Save to database
    saveToDatabase(processedData);
    
    // Send confirmation
    res.json({ success: true, message: 'Dados recebidos com sucesso!' });
});

function extractBasicInfo(data) {
    return {
        nome: data.nome,
        instituicao: data.instituicao || null,
        cargo: data.cargo || null,
        cidade: data.cidade,
        telefone: data.telefone,
        email: data.email
    };
}

function processContactReason(data) {
    const result = {
        motivo_contato: data.motivo_contato,
        mensagem: data.mensagem
    };
    
    // Dynamic processing based on contact reason
    switch(data.motivo_contato) {
        case 'reclamacao':
            result.sub_reclamacao = data.sub_reclamacao;
            result.categoria = 'Atendimento ao Cidadão';
            break;
            
        case 'emendas':
            result.categoria = 'Emendas Parlamentares';
            result.prioridade = 'Alta';
            break;
            
        case 'conversa':
            result.categoria = 'Agenda Política';
            result.requer_agendamento = true;
            break;
    }
    
    return result;
}

function processPreferences(data) {
    return {
        whatsapp_conteudo: data.whatsapp_conteudo || 'sim',
        newsletter: data.newsletter || 'sim',
        aceita_termos: data.aceita_termos || true,
        
        // Create communication profile
        perfil_comunicacao: generateCommunicationProfile(data)
    };
}

function generateCommunicationProfile(data) {
    const profile = [];
    
    if (data.whatsapp_conteudo === 'sim') profile.push('whatsapp');
    if (data.newsletter === 'sim') profile.push('newsletter');
    
    return profile.join(',');
}
```

## 📈 Dynamic Reporting Dashboard Structure

### **Admin Dashboard Table View**
```html
<!-- Dynamic table that adapts to different form submissions -->
<div class="dashboard-container">
    <h2>📋 Submissões do Formulário de Contato</h2>
    
    <!-- Filter Controls -->
    <div class="filters">
        <select id="motivo-filter">
            <option value="">Todos os Motivos</option>
            <option value="reclamacao">Reclamação/Pedido/Sugestão/Elogio</option>
            <option value="emendas">Pedido de Emendas</option>
            <option value="conversa">Marcar Conversa</option>
        </select>
        
        <select id="preferences-filter">
            <option value="">Todas as Preferências</option>
            <option value="whatsapp_sim">WhatsApp: Sim</option>
            <option value="newsletter_sim">Newsletter: Sim</option>
            <option value="ambos_sim">Ambos: Sim</option>
        </select>
    </div>
    
    <!-- Dynamic Table -->
    <table class="submissions-table">
        <thead>
            <tr>
                <th>Data/Hora</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Cidade</th>
                <th>Motivo</th>
                <th class="dynamic-column">Sub-categoria</th>
                <th>Preferências</th>
                <th>Status</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody id="submissions-tbody">
            <!-- Dynamic content populated by JavaScript -->
        </tbody>
    </table>
</div>

<style>
.submissions-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.submissions-table th,
.submissions-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.submissions-table th {
    background-color: #0A1F44;
    color: white;
    font-weight: bold;
}

.submissions-table tr:hover {
    background-color: #f5f5f5;
}

.dynamic-column {
    /* This column adapts based on the motivo_contato */
    min-width: 150px;
}

.preferences-badges {
    display: flex;
    gap: 5px;
}

.badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

.badge-whatsapp {
    background-color: #25D366;
    color: white;
}

.badge-newsletter {
    background-color: #007bff;
    color: white;
}

.status-novo {
    background-color: #28a745;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
}
</style>
```

### **JavaScript for Dynamic Table Population**
```javascript
// dashboard.js
function loadSubmissions() {
    fetch('/api/submissions')
        .then(response => response.json())
        .then(data => {
            populateTable(data);
        });
}

function populateTable(submissions) {
    const tbody = document.getElementById('submissions-tbody');
    tbody.innerHTML = '';
    
    submissions.forEach(submission => {
        const row = createDynamicRow(submission);
        tbody.appendChild(row);
    });
}

function createDynamicRow(submission) {
    const row = document.createElement('tr');
    
    // Dynamic sub-category based on contact reason
    let subCategory = '';
    switch(submission.motivo_contato) {
        case 'reclamacao':
            subCategory = submission.sub_reclamacao || 'N/A';
            break;
        case 'emendas':
            subCategory = 'Emenda Parlamentar';
            break;
        case 'conversa':
            subCategory = 'Agendamento';
            break;
    }
    
    // Create preferences badges
    const preferencesBadges = createPreferencesBadges(submission);
    
    row.innerHTML = `
        <td>${formatDate(submission.timestamp)}</td>
        <td>${submission.nome}</td>
        <td>${submission.email}</td>
        <td>${submission.cidade}</td>
        <td>${formatContactReason(submission.motivo_contato)}</td>
        <td>${subCategory}</td>
        <td>${preferencesBadges}</td>
        <td><span class="status-novo">Novo</span></td>
        <td>
            <button onclick="viewDetails(${submission.id})">Ver</button>
            <button onclick="respond(${submission.id})">Responder</button>
        </td>
    `;
    
    return row;
}

function createPreferencesBadges(submission) {
    let badges = '';
    
    if (submission.whatsapp_conteudo === 'sim') {
        badges += '<span class="badge badge-whatsapp">WhatsApp</span>';
    }
    
    if (submission.newsletter === 'sim') {
        badges += '<span class="badge badge-newsletter">Newsletter</span>';
    }
    
    return `<div class="preferences-badges">${badges}</div>`;
}

function formatContactReason(reason) {
    const reasons = {
        'reclamacao': 'Reclamação/Sugestão',
        'emendas': 'Emendas',
        'conversa': 'Conversa'
    };
    return reasons[reason] || reason;
}

function formatDate(timestamp) {
    return new Date(timestamp).toLocaleString('pt-BR');
}
```

## 🎨 Responsive Design for Mobile

```css
/* Mobile-first responsive design */
@media (max-width: 768px) {
    .submissions-table {
        font-size: 14px;
    }
    
    .submissions-table th,
    .submissions-table td {
        padding: 8px 4px;
    }
    
    /* Stack table on mobile */
    .submissions-table,
    .submissions-table thead,
    .submissions-table tbody,
    .submissions-table th,
    .submissions-table td,
    .submissions-table tr {
        display: block;
    }
    
    .submissions-table thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    
    .submissions-table tr {
        border: 1px solid #ccc;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 8px;
        background: white;
    }
    
    .submissions-table td {
        border: none;
        position: relative;
        padding-left: 50%;
    }
    
    .submissions-table td:before {
        content: attr(data-label) ": ";
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        font-weight: bold;
        color: #0A1F44;
    }
}
```

## 📊 Analytics & Insights

### **Summary Statistics Query**
```sql
-- Get submission statistics by contact reason
SELECT 
    motivo_contato,
    COUNT(*) as total_submissions,
    COUNT(CASE WHEN whatsapp_conteudo = 'sim' THEN 1 END) as whatsapp_subscribers,
    COUNT(CASE WHEN newsletter = 'sim' THEN 1 END) as newsletter_subscribers,
    AVG(CASE WHEN aceita_termos THEN 1 ELSE 0 END) * 100 as consent_rate
FROM contact_submissions 
WHERE timestamp >= NOW() - INTERVAL 30 DAY
GROUP BY motivo_contato
ORDER BY total_submissions DESC;
```

This dynamic structure allows you to:
- ✅ Capture ALL form data including defaults
- ✅ Handle different contact reasons dynamically  
- ✅ Display data in an adaptive table format
- ✅ Filter and search submissions easily
- ✅ Generate analytics and insights
- ✅ Maintain responsive design for mobile
- ✅ Scale for future form changes

The webhook now captures everything including the radio button selections with their default values!
