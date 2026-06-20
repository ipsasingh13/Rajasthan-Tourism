/**
 * ROYAL RAJASTHAN TOURISM INTERACTIVE SYSTEM LOGIC ENGINE
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("System Status: Activated Framework Engine Successfully.");
    
    const budgetBtn = document.getElementById('calcBudgetBtn');
    if(budgetBtn) {
        budgetBtn.addEventListener('click', () => {
            const days = parseInt(document.getElementById('travelDays').value) || 1;
            const style = document.getElementById('travelStyle').value;
            const travelers = parseInt(document.getElementById('travelersCount').value) || 1;
            
            let factor = 2500; 
            if(style === 'mid') factor = 6500;
            if(style === 'luxury') factor = 19500;
            
            const calculationResult = factor * days * travelers;
            const targetDiv = document.getElementById('budgetResult');
            
            if(targetDiv) {
                targetDiv.innerHTML = `
                    <div class="alert alert-success border-2 bg-white text-dark p-3 rounded shadow-sm">
                        <h4 class="royal-font text-maroon mb-1"><i class="fa-solid fa-coins me-2 text-warning"></i>Computed Estimation Breakdown</h4>
                        <p class="fs-2 font-weight-bold text-success mb-1">₹${calculationResult.toLocaleString('en-IN')}</p>
                        <small class="text-muted d-block">*Includes luxury boutique heritage stays, local private guide telemetry, and royal culinary allocations.</small>
                    </div>
                `;
            }
        });
    }
});

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatBox = document.getElementById('chatMessagesBox');
    if(!chatInput || !chatInput.value.trim()) return;

    const rawQuery = chatInput.value.trim();
    
    const userNode = document.createElement('div');
    userNode.className = 'text-end mb-2';
    userNode.innerHTML = `<span class="bg-white text-dark p-2 d-inline-block rounded shadow-sm border" style="max-width:80%; text-align:left;">${rawQuery}</span>`;
    chatBox.appendChild(userNode);
    chatInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        const aiNode = document.createElement('div');
        aiNode.className = 'text-start mb-2';
        
        let reply = "Khamma Ghani! I processed your query. You can view structured entries on Temples, Culture, or use our automated AI Itinerary Planner from the top navigation panel.";
        const matchStr = rawQuery.toLowerCase();
        
        if(matchStr.includes('jaipur') || matchStr.includes('hawa mahal')) {
            reply = "Jaipur (The Pink City) features historic structural assets like Hawa Mahal, Amber Fort and City Palace. We recommend booking a local luxury SUV route guide.";
        } else if(matchStr.includes('temple') || matchStr.includes('khatu') || matchStr.includes('salasar')) {
            reply = "Sacred track detected: Khatu Shyamji Dham (Sikar) and Salasar Balaji Dham (Churu) are easily mapped through our automated itinerary engine planner link.";
        } else if(matchStr.includes('budget') || matchStr.includes('cost')) {
            reply = "To compute complete itemized expenses, navigate directly to our active Cost Assessment Calculator page utility.";
        } else if(matchStr.includes('festivals') || matchStr.includes('culture')) {
            reply = "Rajasthan's calendar includes upcoming heritage gems like the Desert Festival in Jaisalmer and the classic Pushkar Camel Fair framework.";
        }

        aiNode.innerHTML = `<span class="p-2 d-inline-block text-white rounded shadow-sm" style="background-color: #5c0612; max-width:80%;">${reply}</span>`;
        chatBox.appendChild(aiNode);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 650);
}