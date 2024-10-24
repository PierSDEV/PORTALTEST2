// Vizualizace analytických dat pomocí Chart.js
function generateAnalyticsData() {
    const monthlyIncome = calculateMonthlyData('income');
    const monthlyExpenses = calculateMonthlyData('expense');

    // Data pro trendovou analýzu
    const trendData = {
        labels: Object.keys(monthlyIncome),
        datasets: [
            {
                label: 'Měsíční Příjmy',
                data: Object.values(monthlyIncome),
                backgroundColor: 'rgba(40, 167, 69, 0.5)',
                borderColor: '#28a745',
                borderWidth: 2,
                fill: false,
                lineTension: 0.2
            },
            {
                label: 'Měsíční Výdaje',
                data: Object.values(monthlyExpenses),
                backgroundColor: 'rgba(220, 53, 69, 0.5)',
                borderColor: '#dc3545',
                borderWidth: 2,
                fill: false,
                lineTension: 0.2
            }
        ]
    };

    // Vytvoření nebo aktualizace trendového grafu
    const ctx = document.getElementById('trendAnalysisChart').getContext('2d');
    if (window.trendAnalysisChart) {
        window.trendAnalysisChart.data = trendData;
        window.trendAnalysisChart.update();
    } else {
        window.trendAnalysisChart = new Chart(ctx, {
            type: 'line',
            data: trendData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { title: { display: true, text: 'Měsíce' } },
                    y: { title: { display: true, text: 'Částka (€)' } }
                }
            }
        });
    }
}

// Funkce pro výpočet měsíčních dat (příjmy a výdaje)
function calculateMonthlyData(type) {
    const data = {};
    financialTransactions
        .filter(t => t.type === type)
        .forEach(t => {
            const monthYear = new Date(t.date).toLocaleString('cs-CZ', { month: 'long', year: 'numeric' });
            data[monthYear] = (data[monthYear] || 0) + t.amount;
        });
    return data;
}