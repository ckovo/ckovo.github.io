/**
 * 名称展示类 - 控制名字的动画展示效果
 */
class NameDisplay {
    /**
     * 初始化展示所需的属性
     */
    constructor() {
        // 获取容器元素
        this.container = document.querySelector('.container');
        
        // 使用二维数组存储人物信息 [名字, 描述]
        this.persons = [
            ["寻龙", "来自发霉的披萨，永远的闷骚型男"],
            ["发霉的披萨", "待补充"],
            ["Blast", "待补充"],
            ["南烟吹北枳", "待补充"],
            ["Fvhitmitil", "待补充"],
            ["TITANXPASCAL", "待补充"],
            ["枕书", "待补充"],
            ["幻想狂奏曲", "待补充"],
            ["迷之小肥羊", "待补充"],
            ["special", "待补充"],
            ["裝逼造脸一顿踢", "待补充"],
            ["岛田镖师", "待补充"],
            ["淡风盈晓", "待补充"],
            ["SHE", "待补充"],
            ["想念还在等待救援", "待补充"],
            ["只想做个洒脱的人", "待补充"],
            ["腹黑猫", "待补充"],
            ["从未手软", "待补充"],
            ["梦里是艾什", "待补充"],
            ["逗斯咏", "待补充"],
            ["寡言", "待补充"],
            ["易忘", "罪恶的源头，初版源氏跑酷编辑器的作者"],
            ["济南屁屁王", "待补充"],
            ["其实我是自私鬼", "待补充"],
            ["MarshMello", "待补充"],
            ["小鹿可能死了", "待补充"],
            ["MoneyBing", "待补充"],
            ["吾", "待补充"],
            ["这是我家的圆圆呀", "待补充"],
            ["宁就是地上这滩水", "待补充"],
            ["没有梦想不想说话", "待补充"],
            ["家里有妖怪", "待补充"],
            ["神明也曾遗憾", "待补充"],
            ["神明也曾哭泣", "待补充"],
            ["AE86", "待补充"],
            ["狂小禹", "待补充"],
            ["古见哨子", "待补充"],
            ["吾王剑锋所指", "待补充"],
            ["小樱", "待补充"],
            ["枕石漱流", "待补充"],
            ["他说有点疼痛", "待补充"],
            ["浮生有梦三千场", "待补充"],
            ["桀骜之天狼", "待补充"],
            ["刀锋下的泪珠", "待补充"],
            ["淮北也生橘", "待补充"],
            ["奚山先生", "待补充"],
            ["喜欢不笑", "待补充"],
            ["情系泰格", "待补充"],
            ["BlackMasker", "待补充"],
            ["SuperMax", "待补充"],
            ["被鷄奸的狗蛋", "待补充"],
            ["幻想做个人生赢家", "待补充"],
            ["不破爱花", "待补充"],
            ["GENJISHUI", "待补充"],
            ["稻香我也没忘过", "待补充"],
            ["又菜又爱玩的瞄准", "待补充"],
            ["真是不怕被我笑", "待补充"],
            ["拾叁", "待补充"],
            ["由山野到书房", "待补充"],
            ["我花开后百花杀", "待补充"],
            ["SIENNA", "待补充"],
            ["东尼大大", "待补充"],
            ["DEAD", "待补充"],
            ["Crazydouzi", "待补充"],
            ["白昼幽梦", "待补充"],
            ["小亓最帅气哟", "待补充"],
            ["曲终人散", "待补充"],
            ["彼岸花", "待补充"],
            ["你们不配拥有奶妈", "待补充"],
            ["教 授", "待补充"],
            ["水晶兰", "待补充"],
            ["叫我资源怪", "待补充"],
            ["老子让你在这停顿", "待补充"],
            ["断背山牧羊人", "待补充"],
            ["流浪记", "待补充"],
            ["HUNTERE", "待补充"],
            ["五里雾中", "待补充"],
            ["FATHER", "待补充"],
            ["海鸥", "待补充"],
            ["小仙儿", "待补充"],
            ["太阳的黑子", "待补充"],
            ["不跳小苹果", "待补充"],
            ["念念", "待补充"],
            ["LIAOZEHAO", "待补充"],
            ["PISWEREFOUND", "待补充"],
            ["大北", "待补充"],
            ["天才美少女桃花", "待补充"],
            ["打得赢就退出", "待补充"],
            ["绀野木棉季", "待补充"],
            ["萤火巷里的老屋", "待补充"],
            ["苭幼稚的柚子", "待补充"],
            ["秋木苏", "待补充"],
            ["网恋被骗300块", "待补充"],
            ["深海鱼", "待补充"],
            ["食色性也", "待补充"],
            ["夜叉", "待补充"],
            ["上衫佐助", "待补充"],
            ["HUSH", "待补充"],
            ["林深时见鹿", "待补充"],
            ["TEA", "待补充"],
            ["泽重北北", "待补充"],
            ["大果粒粒", "待补充"],
            ["甘心首疾已经年", "待补充"],
            ["恶鬼缠身", "待补充"],
            ["雪中悍刀行", "待补充"],
            ["乌鸦有罪论", "待补充"],
            ["生人勿进", "待补充"],
            ["鸦雀无声", "待补充"],
            ["香蕉味大叔", "待补充"],
            ["想赢我只能去赌", "待补充"],
            ["爱意", "待补充"],
            ["衍涩", "待补充"],
            ["阎魔爱", "待补充"],
            ["小狼狗在线求奶", "待补充"],
            ["柚子", "待补充"],
            ["南城以南思未央", "待补充"],
            ["风华绝代小十七", "待补充"],
            ["鹤见柔一", "待补充"],
            ["苏子远", "待补充"],
            ["曦岚君", "待补充"],
            ["麦月十四", "待补充"],
            ["XIAOYU", "待补充"],
            ["灵林", "待补充"],
            ["AMNESIA", "待补充"],
            ["一蓑烟雨任平生", "待补充"],
            ["眼底春秋也不及你", "待补充"],
            ["半糖去冰", "待补充"],
            ["黄选", "待补充"],
            ["旧梦", "待补充"],
            ["慵懒之龟", "待补充"],
            ["将喜欢藏在今晚", "待补充"],
            ["PHOENIX", "待补充"],
            ["带铁头娃", "待补充"],
            ["雾月屿枝", "待补充"],
            ["衾岚喵", "待补充"],
            ["滱墨", "待补充"],
            ["七里香", "待补充"],
            ["既不淡薄也不浓重", "待补充"],
            ["Goku", "待补充"],
            ["雕瓴不腐", "待补充"],
            ["萌新", "待补充"],
            ["派大星", "待补充"],
            ["朝如青丝目成雪", "待补充"],
            ["写给黄淮", "待补充"],
            ["樱与祈", "待补充"],
            ["澜城", "待补充"],
            ["雪之下雪乃", "待补充"],
            ["MMPTYAREL", "待补充"],
            ["风雪依稀白发尾", "待补充"],
            ["夏姬八上", "待补充"],
            ["谷神星乐子人", "待补充"],
            ["天野灯", "待补充"],
            ["执念", "待补充"],
            ["八碗茶", "待补充"],
            ["旷兮其若谷", "待补充"],
            ["最肯忘却古人诗", "待补充"],
            ["阿箸", "待补充"],
            ["小露露", "待补充"],
            ["心斋", "待补充"],
            ["退时红雨", "待补充"],
            ["难拥拥", "待补充"],
            ["大鹏小菜", "待补充"],
            ["别撸我的猫", "待补充"],
            ["清水", "待补充"],
            ["我亦未败", "待补充"],
            ["你好烧鸭", "待补充"],
            ["江晓晓同学", "待补充"],
            ["世界变模糊了", "待补充"],
            ["LUXET", "待补充"],
            ["绪方理奈", "待补充"],
            ["古德奈先生", "待补充"],
            ["钟情", "待补充"],
            ["云深不知处", "待补充"],
            ["牧濑红莉栖", "待补充"],
            ["满船清梦压星河", "待补充"],
            ["shabi", "待补充"],
            ["伴着黎明东升", "待补充"],
            ["欧 拉", "待补充"],
            ["活有余罪", "待补充"],
            ["激情澎湃的狗哼哼", "待补充"],
            ["听暖", "待补充"],
            ["五三", "待补充"],
            ["才敢说沉溺", "待补充"],
            ["今天星期几", "待补充"],
            ["SRY", "待补充"],
            ["火锅", "待补充"],
            ["半藏他女朋友", "待补充"],
            ["想被你睡", "待补充"],
            ["上课后的咸猪手", "待补充"],
            ["ERIS", "待补充"],
            ["三川", "待补充"],
            ["CAINIAO", "待补充"],
            ["柠萌", "待补充"],
            ["低价出租单身汪", "待补充"],
            ["薛定谔的猫", "待补充"],
            ["酒后单杀丈母娘", "待补充"],
            ["翩跹跹跹跹", "待补充"],
            ["LOST", "待补充"],
            ["一季烟雨凉", "待补充"],
            ["蔷薇", "待补充"],
            ["郑风流倜傥", "待补充"],
            ["LAKER", "待补充"],
            ["糖三岁", "待补充"],
            ["惯看秋月春风", "待补充"],
            ["羽然", "待补充"],
            ["胜天半子祁同伟", "待补充"],
            ["我买几个香蕉去", "待补充"],
            ["西伯利亚熊", "待补充"],
            ["一本瞎本木棉", "待补充"],
            ["夏末末至已觉秋", "待补充"],
            ["夕木", "待补充"],
            ["乐师", "待补充"],
            ["硅胶爷爷", "待补充"],
            ["生而为人我很抱歉", "待补充"],
            ["喵喵酱", "待补充"],
            ["屎里有毒", "待补充"],
            ["我就玩蛇莫哔哔", "待补充"],
            ["上饶烤鸡腿", "待补充"],
            ["媛大头", "待补充"],
            ["言和总是很帅气", "待补充"],
            ["DEADPOOL", "待补充"],
            ["少女强则少年平躺", "待补充"],
            ["寻明", "待补充"],
            ["佐眼血色", "待补充"],
            ["萝莉的原味胖次", "待补充"],
            ["残梦", "待补充"],
            ["犬来八荒", "待补充"],
            ["神明塌下眠", "待补充"],
            ["EiddlePeng", "待补充"],
            ["趴着别动", "待补充"],
            ["清茶", "待补充"],
            ["DAVID", "待补充"],
            ["渡边", "待补充"],
            ["漫天星斗", "待补充"],
            ["Shadder2k", "待补充"],
            ["枯树", "待补充"],
            ["路霸", "待补充"],
            ["八二年的巫毒", "待补充"],
            ["艾莉丝", "待补充"],
            ["我妻由乃", "待补充"],
            ["试试火候来", "待补充"],
            ["我寄人间雪满头", "待补充"],
            ["青椒肉丝", "待补充"],
            ["鬼九", "待补充"],
            ["鱼长毛就会死", "待补充"],
            ["人菜爱哔哔", "待补充"],
            ["EVENEAGLE", "待补充"],
            ["挤挤更健康", "待补充"],
            ["九菜合子", "待补充"],
            ["樱岛麻衣", "待补充"],
            ["NEKO2108", "待补充"],
            ["魂魄妖梦", "待补充"],
            ["YEAH", "待补充"],
            ["泪雨翠青山", "待补充"],
            ["李小璐的假艿亮了", "待补充"],
            ["RUBY", "待补充"],
            ["今游昔", "待补充"],
            ["青红造了个白", "待补充"],
            ["青芯灯冷", "待补充"],
            ["MAYDAY", "待补充"],
            ["LUCKYOWL", "待补充"],
            ["MAPLE", "待补充"],
            ["全场最弱就是我", "待补充"],
            ["是刀锋鸭", "待补充"],
            ["希望德芙永远开心", "待补充"],
            ["秋下清斋西月明", "待补充"],
            ["花了末年妆", "待补充"],
            ["YUUKI", "待补充"],
            ["惊魂之蛙", "待补充"],
            ["三眼兔子", "待补充"],
            ["自由之翼", "待补充"],
            ["HeartMan", "待补充"],
            ["Paris", "待补充"],
            ["艾莉", "待补充"],
            ["笪民", "待补充"],
            ["猴赛雷", "待补充"],
            ["局外人", "待补充"],
            ["神的大脑皮层", "待补充"],
            ["皮皮皮皮基", "待补充"],
            ["糖甜兔", "待补充"],
            ["秋天的大刀", "待补充"],
            ["Apricity", "待补充"],
            ["Bnetplayer", "待补充"],
            ["JellyKing", "待补充"],
            ["寒蝉", "待补充"],
            ["雷蝉", "待补充"],
            ["ZAQ2321", "待补充"],
            ["IvanML", "待补充"],
            ["初秦", "待补充"],
            ["DragonBall", "待补充"],
            ["太二真人", "待补充"],
            ["盐盐盐盐盐盐", "待补充"],
            ["西行寺幽幽子", "待补充"],
            ["就叫古董吧", "待补充"],
            ["北城", "待补充"],
            ["锺淀", "待补充"],
            ["今天有月亮吗", "待补充"],
            ["天使庇护", "待补充"],
            ["SYOUVA", "待补充"],
            ["清风挽", "待补充"],
            ["为所欲为异灵牧", "待补充"],
            ["遥望夏安", "待补充"],
            ["萌尊", "待补充"],
            ["古河渚", "待补充"],
            ["山有扶苏", "待补充"],
            ["请打我队友", "待补充"],
            ["夜未央", "待补充"],
            ["何必要欺骗自己", "待补充"],
            ["叙利亚独狼", "待补充"],
            ["DEPRAVATION", "待补充"],
            ["逍遥肆", "待补充"],
            ["锐", "待补充"],
            ["玩个锤子", "待补充"],
            ["凉忧", "待补充"],
            ["狂野之狼", "待补充"],
            ["她说万幸得以相识", "待补充"],
            ["青童", "待补充"],
            ["桃子味汽水", "待补充"],
            ["奂寒", "待补充"],
            ["沅有芷兮澧有兰", "待补充"],
            ["SuperActor", "待补充"],
            ["时雨诗", "待补充"],
            ["林空鹿饮溪", "待补充"],
            ["踏风白驹", "待补充"],
            ["脱氧核糖也是糖", "待补充"],
            ["魔法之裤天上星", "待补充"],
            ["春卷", "待补充"],
            ["一源二次不等式", "待补充"],
            ["源稚生", "待补充"],
            ["暴躁的武僧", "待补充"],
            ["冰露星星糖", "待补充"],
            ["芸舒", "待补充"],
            ["琉璃", "待补充"],
            ["煜煜", "待补充"],
            ["颜逸", "待补充"],
            ["TSO", "待补充"],
            ["YASSUO", "待补充"],
            ["对眼", "待补充"],
            ["超级铁拳大王", "待补充"],
            ["超级炮台大王", "待补充"],
            ["凕使", "待补充"],
            ["时茗", "待补充"],
            ["冷血炸弹客", "待补充"],
            ["璐璐", "待补充"],
            ["魔法少女吴彦祖", "待补充"],
            ["你不开心我哄你啊", "待补充"],
            ["小苏", "待补充"],
            ["忙里油多", "待补充"],
            ["木子火青", "待补充"],
            ["土拨鼠", "待补充"],
            ["翎马", "待补充"],
            ["郁楠", "待补充"],
            ["月亮两块五", "待补充"],
            ["蚊纸", "待补充"],
            ["梦想拥有猫猫子", "待补充"],
            ["剑剑超可爱", "待补充"],
            ["朦朦胧胧的月光下", "待补充"],
            ["欲念似火般焦灼", "待补充"],
            ["LOUISK", "待补充"],
            ["夏雪冬花", "待补充"],
            ["大佩", "待补充"],
            ["腻歪", "待补充"],
            ["橙色阳光暖如你", "待补充"],
            ["FLOWERSDANCE", "待补充"],
            ["第十二夜", "待补充"],
            ["一夜十三郎", "待补充"],
            ["李达康", "待补充"],
            ["COLORFULDOG", "待补充"],
            ["汐落帝伦幻", "待补充"],
            ["刀与她皆无情", "待补充"],
            ["无界", "待补充"],
            ["菊花开了", "待补充"],
            ["机智的小黄人", "待补充"],
            ["九薿", "待补充"],
            ["见面记得送花", "待补充"],
            ["Jackherer", "待补充"],
            ["情系瑶瑶", "待补充"],
            ["海水不及我意深", "待补充"],
            ["双子星耶尔斯", "待补充"],
            ["有幸此生不独奏", "待补充"],
            ["TCC", "待补充"],
            ["月下枫", "待补充"],
            ["请务必把胖次给我", "待补充"],
            ["路过的卡面来打", "待补充"],
            ["日记写了吗", "待补充"],
            ["YAZI", "待补充"],
            ["KNIFE", "待补充"],
            ["好色且卑鄙的小甲", "待补充"],
            ["HELLFIRE", "待补充"],
            ["才不是爱哭鬼", "待补充"],
            ["WAN", "待补充"],
            ["Buntor", "待补充"],
            ["P1ZZA", "待补充"],
            ["SHANGLI", "待补充"],
            ["SHESHE", "待补充"],
            ["s1mple", "待补充"],
            ["KININEE", "待补充"],
            ["雪飘人间", "待补充"],
            ["人就像海里漂的船", "待补充"],
            ["HUGINZZZ", "待补充"],
            ["乜一", "待补充"],
            ["数码暴龙肥怪蛇", "待补充"],
            ["LSKOTORI", "待补充"],
            ["仔仔", "待补充"],
            ["追风赶月别留情", "待补充"],
            ["一具无头白尸", "待补充"],
            ["世界上最爱我的人", "待补充"],
            ["特殊你旭", "待补充"],
            ["鸦子不爱吃甜食", "待补充"],
            ["南巷清风", "待补充"],
            ["何时", "待补充"],
            ["赤井秀一", "待补充"],
            ["电诺", "待补充"],
            ["十六", "待补充"],
            ["宛如红袖", "待补充"],
            ["折枝花满衣", "待补充"],
            ["咩樱", "待补充"],
            ["旧版安全卫士", "待补充"],
            ["新版安全卫士", "待补充"],
            ["九头蛇万岁", "待补充"],
            ["百无聊", "待补充"],
            ["珊瑚", "待补充"],
            ["一具无头男尸", "待补充"],
            ["BOOMBOOM", "待补充"],
            ["余不乐", "待补充"],
            ["啊呜", "待补充"],
            ["流星一条", "待补充"],
            ["琪琪少女酱", "待补充"],
            ["这天下风情千万般", "待补充"],
            ["镜花水月", "待补充"],
            ["我只有你一只小猪", "待补充"],
            ["可乐冒泡啦", "待补充"],
            ["可乐乐", "待补充"],
            ["给你一瓶魔法药水", "待补充"],
            ["种一颗玫瑰", "待补充"],
            ["与神画押我赌你", "待补充"],
            ["花旦", "待补充"],
            ["MYSXBJD", "待补充"],
            ["手捧水仙花", "待补充"],
            ["SECRET", "待补充"],
            ["FAIRY", "待补充"],
            ["EASON", "待补充"],
            ["GENJIYES", "待补充"],
            ["孤傲的喷火龙青", "待补充"],
            ["HEY", "待补充"],
            ["蚂蚁酱", "待补充"],
            ["成果成果成狗", "待补充"],
            ["导演我躺好了", "待补充"],
            ["游龙归穴见波涛", "待补充"],
            ["XIAOYU", "待补充"],
            ["Romant", "待补充"],
            ["北街细雨", "待补充"],
            ["AndIloveHER", "待补充"],
            ["Breeze", "待补充"],
            ["久别重逢", "待补充"],
            ["八意永琳", "待补充"],
            ["国际南酮狩猎员", "待补充"],
            ["少年阿宾", "待补充"],
            ["是但求其爱", "待补充"],
            ["为所欲为丶鸡蛋饼", "待补充"],
            ["芒果鲨", "待补充"],
            ["守望先锋2归西", "待补充"],
            ["YiNian", "待补充"],
            ["锤淀", "待补充"],
            ["Legends", "待补充"],
            ["看我干什么", "待补充"],
            ["黑犀侠", "待补充"],
            ["Ayanami", "待补充"],
            ["我的76不会开大", "待补充"]
        ];

        // 当前展示到的索引位置
        this.currentIndex = 0;
        // 每组显示的名字数量
        this.displayCount = 5;
        // 名字方块的宽度
        this.boxWidth = 200;
        // 名字方块之间的边距
        this.boxMargin = 20;

        // 背景图片数组
        this.backgroundImages = [
            'img/1.webp'
        ];

        // 新增列数配置
        this.columns = 5; // 屏幕分为5列
        this.columnOffsets = []; // 存储每列的垂直偏移量
        this.lastNameInColumn = []; // 记录每列最后一个名字的位置
        
        // 初始化列偏移量
        for(let i = 0; i < this.columns; i++) {
            this.columnOffsets[i] = 0;
            this.lastNameInColumn[i] = -200; // 初始偏移
        }

        // 添加一个标志来追踪是否正在显示
        this.isDisplaying = false;
        
        // 添加计时器引用
        this.animationTimer = null;
        
        // 修改页面可见性监听器
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.isDisplaying = false;
                // 清除计时器
                if (this.animationTimer) {
                    clearTimeout(this.animationTimer);
                    this.animationTimer = null;
                }
                // 页面隐藏时清除所有名字元素
                const nameBoxes = document.querySelectorAll('.name-box');
                nameBoxes.forEach(box => {
                    if (box && box.parentNode) {
                        box.parentNode.removeChild(box);
                    }
                });
                
                // 重置所有状态
                this.currentIndex = 0;
                this.columnOffsets.fill(0);
                this.lastNameInColumn.fill(-200);
            } else {
                // 页面重新可见时，重新开始显示
                if (!this.isDisplaying) {
                    this.shuffleNames();
                    this.showNextGroup();
                    this.isDisplaying = true;
                }
            }
        });

        // 创建并显示计数器
        this.createCounter();
    }

    /**
     * 初始化展示效果
     */
    initialize() {
        // 设置随机背景
        this.setRandomBackground();
        // 首次打乱名字顺序
        this.shuffleNames();
        // 开始展示第一组名字
        this.showNextGroup();
    }

    /**
     * 设置随机背景图片
     */
    setRandomBackground() {
        // 创建背景容器
        const bgContainer = document.createElement('div');
        bgContainer.className = 'bg-container';
        
        // 随机选择一张图片
        const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
        const imgPath = this.backgroundImages[randomIndex];
        
        // 创建图片元素
        const img = document.createElement('img');
        img.src = imgPath;
        
        // 图片加载完成后显示
        img.onload = () => {
            bgContainer.classList.add('show');
        };
        
        bgContainer.appendChild(img);
        document.body.insertBefore(bgContainer, document.body.firstChild);
    }

    /**
     * 随机打乱名字数组顺序
     */
    shuffleNames() {
        // Fisher-Yates 洗牌算法，直接打乱 persons 数组
        for (let i = this.persons.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.persons[i], this.persons[j]] = [this.persons[j], this.persons[i]];
        }
    }

    /**
     * 获取名字方块的随机位置和动画延迟
     * @param {number} index - 当前名字在组中的索引
     * @returns {Object} 包含位置和延迟信息的对象
     */
    getRandomPosition(index) {
        // 距离浏览器边缘的最小距离
        const margin = 100;
        // 计算可用的宽度空间
        const availableWidth = window.innerWidth - (2 * margin);
        // 将空间分成几个区域（比显示数量多1，确保有足够间距）
        const sections = this.displayCount + 1;
        const sectionWidth = availableWidth / sections;
        
        // 计算基础位置
        const baseLeft = margin + (sectionWidth * (index + 0.5));
        // 计算最大随机偏移量
        const maxOffset = Math.min(sectionWidth * 0.3, 50);
        // 生成随机偏移
        const randomOffset = (Math.random() - 0.5) * maxOffset;
        
        return {
            // 确保方块完全在视口内
            left: Math.min(Math.max(margin, baseLeft + randomOffset), window.innerWidth - margin - this.boxWidth),
            // 随机延迟时间 0-1.5秒
            delay: Math.random() * 1.5,
            // 随机起始垂直偏移 0-200像素
            startOffset: Math.random() * 200
        };
    }

    /**
     * 创建单个名字的DOM元素
     * @param {number} index - 名字在数组中的索引
     * @param {number} column - 列位置
     * @returns {HTMLElement} 创建的名字元素
     */
    createNameElement(index, column) {
        const nameElement = document.createElement('div');
        nameElement.className = 'name-box';
        
        // 存储完整的人物信息，而不是仅存储索引
        const person = this.persons[index];
        nameElement.dataset.name = person[0];
        nameElement.dataset.description = person[1];
        nameElement.textContent = person[0];

        // 计算水平位置
        const containerWidth = this.container.clientWidth - 100;
        const columnWidth = containerWidth / this.columns;
        
        // 创建临时元素计算文字宽度
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.fontSize = '24px'; // 与 name-box 相同的字体大小
        tempSpan.textContent = this.persons[index][0];
        document.body.appendChild(tempSpan);
        
        // 获取文字宽度并添加左右各20px的内边距
        const textWidth = tempSpan.offsetWidth + 40; // 40 = 左右各20px内边距
        document.body.removeChild(tempSpan);
        
        // 设置基础z-index
        const baseZIndex = 1;
        
        // 设置样式
        nameElement.style.cssText = `
            left: ${100 + column * columnWidth + columnWidth * 0.1}px; 
            right: ${100 + column * columnWidth + columnWidth * 0.1}px; 
            top: ${-100}px;
            width: ${textWidth}px;
            opacity: 0;
            z-index: ${baseZIndex};
            transform: translateY(${this.getVerticalOffset(column)}px);
        `;

        // 修改鼠标事件处理
        nameElement.addEventListener('mouseenter', (e) => {
            nameElement.classList.add('paused');
            nameElement.style.zIndex = '1000';
            
            const descriptionBox = document.createElement('div');
            descriptionBox.className = 'description-box';
            // 直接使用存储在 dataset 中的描述
            descriptionBox.textContent = nameElement.dataset.description;
            document.body.appendChild(descriptionBox);

            // 计算描述框位置
            const rect = nameElement.getBoundingClientRect();
            const boxLeft = rect.right + 10;
            const boxTop = rect.top;

            // 检查是否超出右边界
            if (boxLeft + descriptionBox.offsetWidth > window.innerWidth) {
                descriptionBox.style.left = (rect.left - descriptionBox.offsetWidth - 10) + 'px';
            } else {
                descriptionBox.style.left = boxLeft + 'px';
            }
            descriptionBox.style.top = boxTop + 'px';

            // 显示描述框
            requestAnimationFrame(() => {
                descriptionBox.classList.add('show');
            });

            // 存储描述框引用
            nameElement.descriptionBox = descriptionBox;
        });

        nameElement.addEventListener('mouseleave', () => {
            // 恢复动画
            nameElement.classList.remove('paused');
            nameElement.style.zIndex = baseZIndex;
            
            // 移除描述框
            if (nameElement.descriptionBox) {
                nameElement.descriptionBox.remove();
                nameElement.descriptionBox = null;
            }
        });

        // 移除之前重复的事件监听
        nameElement.addEventListener('animationend', () => {
            nameElement.remove();
        });

        return nameElement;
    }

    /**
     * 获取垂直偏移量
     * @param {number} column - 列位置
     * @returns {number} 垂直偏移量
     */
    getVerticalOffset(column) {
        const minVerticalGap = 150;
        const lastNamePosition = this.lastNameInColumn[column];
        const verticalOffset = Math.max(
            this.columnOffsets[column],
            lastNamePosition + minVerticalGap
        );

        this.columnOffsets[column] = verticalOffset;
        this.lastNameInColumn[column] = verticalOffset;

        return verticalOffset;
    }

    /**
     * 显示下一组名字
     */
    showNextGroup() {
        if (!this.isDisplaying) {
            this.isDisplaying = true;
        }

        if (this.currentIndex + this.displayCount > this.persons.length) {
            this.currentIndex = 0;
            this.shuffleNames();
            this.columnOffsets.fill(0);
            this.lastNameInColumn.fill(-200);
        }

        // 为每个名字分配一个列
        const columns = Array.from(
            { length: this.displayCount }, 
            (_, i) => i % this.columns
        );
        
        // 打乱列的顺序
        for (let i = columns.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [columns[i], columns[j]] = [columns[j], columns[i]];
        }

        // 修改显示间隔时间
        const intervalTime = 800; // 增加间隔时间，从500改为800

        // 显示名字
        columns.forEach((column, index) => {
            setTimeout(() => {
                const nameIndex = (this.currentIndex + index) % this.persons.length;
                const nameElement = this.createNameElement(nameIndex, column);
                this.container.appendChild(nameElement);
                
                requestAnimationFrame(() => {
                    nameElement.classList.add('moving');
                });
            }, index * intervalTime); // 使用新的间隔时间
        });

        this.currentIndex += this.displayCount;
        // 修改下一组显示的延迟时间
        this.animationTimer = setTimeout(
            () => this.showNextGroup(), 
            this.displayCount * intervalTime + 1000 // 增加额外延迟
        );
    }

    /**
     * 创建并显示计数器
     */
    createCounter() {
        const counterContainer = document.createElement('div');
        counterContainer.className = 'counter-container';
        counterContainer.textContent = `已收录：${this.persons.length} 人`;
        document.body.appendChild(counterContainer);

        // 使用 requestAnimationFrame 确保在下一帧显示
        requestAnimationFrame(() => {
            counterContainer.classList.add('show');
        });
    }
}

// 页面加载完成后初始化展示效果
document.addEventListener('DOMContentLoaded', () => {
    const nameDisplay = new NameDisplay();
    nameDisplay.initialize();
}); 