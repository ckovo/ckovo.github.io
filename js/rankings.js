// 排行榜相关的 JavaScript 代码
function showHeroModal() {
    const modal = document.getElementById('heroModal');
    modal.classList.add('show');
    if (!modal.hasAttribute('data-initialized')) {
        initRankings();
        modal.setAttribute('data-initialized', 'true');
    }
    document.addEventListener('click', closeModalOnOutsideClick);
    
    // 默认选中 OGP-Ⅰ
    showRanking('ogp1');
}

function hideHeroModal() {
    document.getElementById('heroModal').classList.remove('show');
    document.removeEventListener('click', closeModalOnOutsideClick);
}

function closeModalOnOutsideClick(event) {
    const modal = document.getElementById('heroModal');
    const heroContent = modal.querySelector('.hero-content');
    
    if (!heroContent.contains(event.target) && !event.target.classList.contains('nav-button')) {
        hideHeroModal();
    }
}

function showRanking(type) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.ranking-list').forEach(list => list.classList.remove('active'));
    
    // 根据类型选择对应的标签和列表
    let tabIndex;
    let listId;
    
    switch(type) {
        case 'ogp1':       // OGP-Ⅰ
            tabIndex = 1;
            listId = 'ogp1Ranking';
            break;
        case 'ogp2':       // OGP-Ⅱ
            tabIndex = 2;
            listId = 'ogp2Ranking';
            break;
        case 'ogp3':       // OGP-Ⅲ
            tabIndex = 3;
            listId = 'ogp3Ranking';
            break;
        case 'speed':      // 抗疫杯
            tabIndex = 4;
            listId = 'speedRanking';
            break;
    }
    
    document.querySelector(`.tab:nth-child(${tabIndex})`).classList.add('active');
    document.getElementById(listId).classList.add('active');
}

const rankings = {
    speed: [
        { name: "迷之小肥羊", score: "记录：303.18秒" },
        { name: "上杉佐助", score: "记录：306.77秒" },
        { name: "甘心首疾已经年", score: "记录：309.84秒" },
        { name: "夜叉", score: "记录：318.93秒" },
        { name: "稻香我也没忘过", score: "记录：351.70秒" }
    ],
    ogp2: [
        { name: "TITANXPASCAL", score: "记录：15关（5800秒）" },
        { name: "只想做个洒脱的人", score: "记录：14关（6000秒）" },
        { name: "SHE", score: "记录：14关（7500秒）" },
        { name: "幻舒", score: "记录：14关（8000秒）" },
        { name: "寻龙", score: "记录：14关（8500秒）" }
    ],
    ogp1: [
        { name: "南烟吹北枳", score: "记录：369.61秒（决赛）" },
        { name: "余不乐", score: "记录：418.24秒（决赛）" },
        { name: "blast", score: "记录：465.49秒（半决赛）" },
        { name: "Crazydouzi", score: "记录：514.69秒（半决赛）" },
        { name: "其实我是自私鬼", score: "记录：517.78秒（半决赛）" }
    ],
    ogp3: [
        { name: "逢魔时王", score: "记录：420.81秒" },
        { name: "AE86", score: "记录：432.43秒" },
        { name: "皮皮皮皮基", score: "记录：440.11秒" },
        { name: "三川", score: "记录：442.63秒" },
        { name: "迷之小肥羊", score: "记录：457.50秒" }
    ]
};

function initRankings() {
    Object.keys(rankings).forEach(type => {
        const list = document.getElementById(`${type}Ranking`);
        list.innerHTML = rankings[type].map((item, index) => `
            <div class="rank-item">
                <div class="rank-number">${index + 1}</div>
                <div class="rank-info">
                    <div class="rank-name">${item.name}</div>
                    <div class="rank-score">${item.score}</div>
                </div>
            </div>
        `).join('');
    });
}

// 页面加载完成后初始化事件监听
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
}); 