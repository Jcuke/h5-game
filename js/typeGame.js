Array.prototype.contains = function ( needle ) {
    for (i in this) {
        if (this[i] == needle) return true;
    }
    return false;
};

Array.prototype.remove=function(dx)
{
    if(isNaN(dx)||dx>this.length){return false;}
    for(var i=0,n=0;i<this.length;i++)
    {
        if(this[i]!=this[dx])
        {
            this[n++]=this[i]
        }
    }
    this.length-=1
};


var WORDS = {
    2: ['am', 'an', 'as', 'at', 'be', 'by', 'cs', 'do', 'go', 'he', 'if', 'in', 'is', 'it', 'me', 'my', 'no', 'of', 'oh', 'on', 'or', 'pi', 're', 'so', 'to', 'up', 'us', 'we'],
    3: ['act', 'add', 'age', 'ago', 'aid', 'aim', 'air', 'all', 'and', 'any', 'are', 'arm', 'art', 'ask', 'ate', 'bad', 'ban', 'bar', 'bed', 'bet', 'bid', 'big', 'bit', 'box', 'boy', 'bug', 'bus', 'but', 'buy', 'can', 'car', 'cat', 'cry', 'cup', 'cut', 'day', 'did', 'die', 'doe', 'dog', 'dry', 'due', 'eat', 'end', 'err', 'eye', 'fan', 'far', 'fed', 'few', 'fit', 'fix', 'fly', 'for', 'fry', 'fun', 'gap', 'gas', 'get', 'got', 'gun', 'guy', 'had', 'has', 'hat', 'her', 'hid', 'him', 'his', 'hit', 'hot', 'how', 'ice', 'ill', 'its', 'job', 'joy', 'key', 'kid', 'law', 'lay', 'led', 'leg', 'let', 'lie', 'log', 'lot', 'low', 'mad', 'man', 'map', 'may', 'men', 'met', 'mix', 'mod', 'net', 'new', 'nor', 'not', 'now', 'odd', 'off', 'oil', 'old', 'one', 'our', 'out', 'owe', 'own', 'pay', 'pen', 'per', 'pop', 'put', 'ran', 'raw', 'red', 'rid', 'row', 'run', 'sad', 'sat', 'saw', 'say', 'see', 'set', 'sex', 'she', 'sit', 'six', 'son', 'sum', 'sun', 'tax', 'tea', 'ten', 'the', 'tie', 'tin', 'too', 'top', 'try', 'two', 'use', 'van', 'via', 'war', 'was', 'way', 'who', 'why', 'win', 'won', 'yes', 'yet', 'you'],
    4: ['able', 'acts', 'adds', 'ages', 'aims', 'also', 'area', 'army', 'asks', 'away', 'back', 'ball', 'band', 'bank', 'bars', 'base', 'bear', 'been', 'best', 'bets', 'bids', 'bill', 'bind', 'bite', 'bits', 'blow', 'blue', 'boat', 'body', 'book', 'boot', 'bore', 'both', 'bugs', 'bulk', 'bury', 'busy', 'buys', 'byte', 'call', 'came', 'card', 'care', 'case', 'cell', 'cent', 'char', 'chip', 'city', 'club', 'clue', 'code', 'cold', 'come', 'cope', 'copy', 'core', 'cost', 'cure', 'cuts', 'dare', 'dark', 'data', 'date', 'days', 'dead', 'deal', 'dear', 'deem', 'deep', 'desk', 'died', 'dies', 'disc', 'disk', 'does', 'done', 'door', 'down', 'draw', 'drew', 'drop', 'dumb', 'dump', 'duty', 'each', 'ease', 'east', 'easy', 'eats', 'edge', 'edit', 'else', 'ends', 'even', 'ever', 'eyes', 'face', 'fact', 'fail', 'fair', 'fall', 'farm', 'fast', 'fate', 'fear', 'feed', 'feel', 'feet', 'fell', 'felt', 'file', 'fill', 'film', 'find', 'fine', 'fire', 'firm', 'fish', 'fits', 'five', 'flag', 'flat', 'flew', 'flow', 'folk', 'food', 'foot', 'form', 'four', 'free', 'from', 'full', 'fund', 'gain', 'game', 'gave', 'gets', 'girl', 'give', 'glad', 'goes', 'gone', 'good', 'grew', 'grow', 'hack', 'hair', 'half', 'hall', 'hand', 'hang', 'hard', 'harm', 'hate', 'have', 'head', 'hear', 'heat', 'held', 'hell', 'help', 'here', 'hide', 'high', 'hill', 'hint', 'hits', 'hold', 'hole', 'home', 'hope', 'host', 'hour', 'huge', 'hung', 'hunt', 'idea', 'inch', 'info', 'into', 'item', 'jobs', 'join', 'joke', 'jump', 'junk', 'just', 'keen', 'keep', 'kept', 'keys', 'kill', 'kind', 'king', 'knew', 'know', 'lack', 'lady', 'lain', 'land', 'last', 'late', 'laws', 'lazy', 'lead', 'leaf', 'left', 'legs', 'lend', 'less', 'lets', 'lied', 'lies', 'life', 'lift', 'like', 'line', 'link', 'list', 'live', 'load', 'loan', 'lock', 'logs', 'long', 'look', 'loop', 'lose', 'loss', 'lost', 'lots', 'love', 'luck', 'made', 'mail', 'main', 'make', 'many', 'mark', 'mass', 'mean', 'meet', 'mere', 'mess', 'mile', 'mind', 'mine', 'miss', 'mode', 'more', 'most', 'move', 'much', 'must', 'name', 'near', 'neck', 'need', 'news', 'next', 'nice', 'nine', 'none', 'note', 'numb', 'obey', 'odds', 'omit', 'once', 'ones', 'only', 'onto', 'open', 'ours', 'over', 'owed', 'owes', 'pack', 'page', 'paid', 'pain', 'pair', 'park', 'part', 'pass', 'past', 'path', 'pays', 'peak', 'pick', 'pile', 'pint', 'pipe', 'plan', 'play', 'plea', 'plot', 'plug', 'plus', 'poem', 'poet', 'poll', 'pool', 'poor', 'port', 'post', 'pull', 'pure', 'push', 'puts', 'putt', 'quit', 'race', 'rain', 'rare', 'rate', 'read', 'real', 'rely', 'rest', 'ride', 'rids', 'ring', 'rise', 'risk', 'road', 'role', 'roll', 'room', 'root', 'rule', 'runs', 'rush', 'safe', 'said', 'sake', 'sale', 'same', 'save', 'says', 'scan', 'seek', 'seem', 'seen', 'sees', 'self', 'sell', 'send', 'sent', 'sets', 'ship', 'shop', 'show', 'shut', 'side', 'sign', 'site', 'sits', 'size', 'slip', 'slow', 'soft', 'sold', 'some', 'soon', 'sort', 'spot', 'stay', 'step', 'stop', 'such', 'suit', 'sure', 'take', 'talk', 'tank', 'tape', 'task', 'team', 'tell', 'tend', 'term', 'test', 'text', 'than', 'that', 'them', 'then', 'they', 'thin', 'this', 'thus', 'tied', 'ties', 'till', 'time', 'told', 'took', 'town', 'trap', 'tree', 'trip', 'true', 'tune', 'turn', 'type', 'ugly', 'unit', 'upon', 'used', 'user', 'uses', 'vary', 'vast', 'very', 'vice', 'view', 'vote', 'wait', 'walk', 'wall', 'want', 'warm', 'warn', 'wash', 'ways', 'wear', 'week', 'well', 'went', 'were', 'west', 'what', 'when', 'whom', 'wide', 'wife', 'wild', 'will', 'wind', 'wine', 'wins', 'wire', 'wise', 'wish', 'with', 'word', 'wore', 'work', 'worn', 'year', 'your', 'zero'],
    5: ['about', 'above', 'abuse', 'acted', 'added', 'admit', 'adopt', 'after', 'again', 'agree', 'ahead', 'aimed', 'alarm', 'album', 'alias', 'alive', 'allow', 'alone', 'along', 'alter', 'among', 'amuse', 'angle', 'angry', 'annoy', 'apart', 'apple', 'apply', 'areas', 'argue', 'arise', 'aside', 'asked', 'avoid', 'awake', 'award', 'aware', 'awful', 'backs', 'badly', 'based', 'bases', 'basic', 'basis', 'bears', 'began', 'begin', 'begun', 'being', 'below', 'binds', 'bites', 'black', 'blame', 'blank', 'block', 'board', 'books', 'borne', 'bound', 'boxes', 'brand', 'break', 'brief', 'bring', 'broke', 'brown', 'build', 'built', 'bytes', 'calls', 'cards', 'cares', 'carry', 'cases', 'catch', 'cause', 'cease', 'chain', 'chair', 'chaos', 'chars', 'cheap', 'child', 'chips', 'chose', 'claim', 'class', 'clean', 'clear', 'clock', 'close', 'coded', 'codes', 'comes', 'costs', 'could', 'count', 'court', 'cover', 'crash', 'crazy', 'crisp', 'cross', 'cycle', 'daily', 'dated', 'dates', 'datum', 'deals', 'dealt', 'death', 'deems', 'delay', 'depth', 'digit', 'dirty', 'discs', 'ditto', 'doing', 'doors', 'doubt', 'dozen', 'drawn', 'draws', 'dream', 'drink', 'drive', 'drops', 'drove', 'dying', 'early', 'earth', 'eaten', 'edits', 'eight', 'elect', 'empty', 'ended', 'enemy', 'enjoy', 'enter', 'entry', 'equal', 'error', 'evens', 'event', 'every', 'exact', 'exist', 'extra', 'facts', 'fails', 'faith', 'falls', 'false', 'fancy', 'fatal', 'fault', 'feeds', 'feels', 'fewer', 'field', 'fight', 'filed', 'files', 'fills', 'final', 'finds', 'first', 'fixed', 'fixes', 'flash', 'flied', 'flies', 'float', 'floor', 'flown', 'folks', 'force', 'forms', 'forth', 'found', 'frame', 'fresh', 'fries', 'front', 'fully', 'funds', 'funny', 'gains', 'games', 'given', 'gives', 'glass', 'going', 'goods', 'grand', 'grant', 'graph', 'grave', 'great', 'green', 'grind', 'gross', 'group', 'grown', 'grows', 'guard', 'guess', 'guide', 'habit', 'hands', 'handy', 'hangs', 'happy', 'heads', 'heard', 'hears', 'heart', 'heavy', 'hello', 'helps', 'hence', 'hides', 'hints', 'holds', 'holes', 'hoped', 'hopes', 'horse', 'hotel', 'hours', 'house', 'human', 'hurry', 'ideal', 'ideas', 'image', 'imply', 'index', 'inner', 'input', 'issue', 'items', 'joins', 'joint', 'judge', 'jumps', 'keeps', 'kills', 'kinds', 'knock', 'known', 'knows', 'label', 'lacks', 'lands', 'large', 'lasts', 'later', 'leach', 'leads', 'learn', 'least', 'leave', 'legal', 'level', 'light', 'liked', 'likes', 'limit', 'lines', 'links', 'lists', 'lived', 'lives', 'loads', 'local', 'locks', 'logic', 'looks', 'loose', 'lorry', 'loses', 'lower', 'lucky', 'lunch', 'lying', 'magic', 'major', 'makes', 'march', 'marks', 'marry', 'match', 'maybe', 'means', 'meant', 'media', 'meets', 'merit', 'messy', 'metal', 'might', 'miles', 'minds', 'minor', 'mixed', 'mixes', 'model', 'money', 'month', 'moral', 'mouth', 'moved', 'moves', 'movie', 'music', 'naive', 'named', 'names', 'nasty', 'needs', 'never', 'nicer', 'night', 'noise', 'noisy', 'north', 'noted', 'notes', 'novel', 'occur', 'offer', 'often', 'older', 'omits', 'opens', 'order', 'other', 'ought', 'outer', 'owing', 'owner', 'pages', 'pairs', 'paper', 'parts', 'party', 'patch', 'pause', 'payed', 'peace', 'phase', 'phone', 'picks', 'piece', 'place', 'plain', 'plane', 'plans', 'plant', 'plays', 'plots', 'point', 'posts', 'pound', 'power', 'press', 'price', 'prime', 'print', 'prior', 'prone', 'proof', 'prove', 'pulls', 'putts', 'queue', 'quick', 'quiet', 'quite', 'quits', 'quote', 'radio', 'raise', 'range', 'rapid', 'rates', 'reach', 'react', 'reads', 'ready', 'refer', 'reply', 'right', 'river', 'rooms', 'rough', 'round', 'route', 'rules', 'sadly', 'safer', 'saint', 'sales', 'saved', 'saves', 'scale', 'scene', 'score', 'scrap', 'seeks', 'seems', 'sells', 'sends', 'sense', 'serve', 'seven', 'shall', 'shame', 'shape', 'share', 'sharp', 'sheet', 'shelf', 'shell', 'shift', 'shoot', 'shops', 'short', 'shown', 'shows', 'shuts', 'sides', 'sight', 'signs', 'silly', 'since', 'sites', 'sizes', 'skill', 'sleep', 'small', 'smile', 'solid', 'solve', 'sorry', 'sorts', 'sound', 'south', 'space', 'spare', 'speak', 'speed', 'spell', 'spend', 'spent', 'spite', 'split', 'spoke', 'spots', 'staff', 'stage', 'stand', 'start', 'state', 'stays', 'steal', 'stick', 'still', 'stock', 'stone', 'stood', 'stops', 'store', 'stuck', 'study', 'stuff', 'style', 'sugar', 'suits', 'table', 'taken', 'takes', 'talks', 'tanks', 'tapes', 'tasks', 'taste', 'teach', 'teeth', 'tells', 'tends', 'terms', 'tests', 'thank', 'their', 'there', 'these', 'thing', 'think', 'third', 'those', 'three', 'threw', 'throw', 'tight', 'timed', 'times', 'title', 'today', 'token', 'tooth', 'topic', 'total', 'touch', 'trace', 'track', 'train', 'traps', 'trash', 'treat', 'trees', 'trial', 'trick', 'tried', 'tries', 'truck', 'truly', 'trunk', 'trust', 'truth', 'turns', 'twice', 'tying', 'typed', 'types', 'under', 'unite', 'units', 'until', 'upper', 'upset', 'usage', 'users', 'using', 'usual', 'vague', 'valid', 'value', 'video', 'views', 'visit', 'vital', 'voice', 'votes', 'waits', 'walks', 'walls', 'wants', 'warns', 'waste', 'watch', 'water', 'wears', 'weeks', 'weird', 'wheel', 'where', 'which', 'while', 'white', 'whole', 'whose', 'wider', 'wills', 'woman', 'women', 'words', 'works', 'world', 'worry', 'worse', 'worst', 'worth', 'would', 'write', 'wrong', 'wrote', 'years', 'young', 'yours'],
    6: ['accept', 'access', 'accord', 'across', 'acting', 'action', 'active', 'actual', 'adding', 'adjust', 'admits', 'adopts', 'advice', 'advise', 'affair', 'affect', 'afford', 'afraid', 'agency', 'agreed', 'agrees', 'aiming', 'allows', 'almost', 'alters', 'always', 'amount', 'amused', 'amuses', 'animal', 'annoys', 'annual', 'answer', 'anyone', 'anyway', 'appeal', 'appear', 'argued', 'argues', 'arises', 'around', 'arrive', 'artist', 'asking', 'asleep', 'aspect', 'assume', 'assure', 'attach', 'attack', 'attend', 'author', 'autumn', 'avoids', 'backed', 'basing', 'became', 'become', 'before', 'begins', 'behalf', 'behave', 'behind', 'belong', 'better', 'beyond', 'bigger', 'binary', 'biting', 'bitten', 'boards', 'bodies', 'borrow', 'bother', 'bottle', 'bottom', 'bought', 'branch', 'breach', 'breaks', 'bridge', 'bright', 'brings', 'broken', 'bucket', 'budget', 'buffer', 'builds', 'buried', 'buries', 'button', 'buying', 'called', 'cannot', 'caught', 'caused', 'causes', 'chance', 'change', 'charge', 'choice', 'choose', 'chosen', 'church', 'circle', 'claims', 'clears', 'clever', 'closed', 'closer', 'closes', 'coding', 'coffee', 'column', 'coming', 'common', 'copied', 'copies', 'corner', 'counts', 'county', 'couple', 'course', 'covers', 'create', 'credit', 'crisis', 'crisps', 'cursor', 'cycles', 'damage', 'danger', 'dating', 'debate', 'decade', 'decent', 'decide', 'deduce', 'deemed', 'deeply', 'define', 'degree', 'delete', 'demand', 'depend', 'derive', 'design', 'desire', 'detail', 'detect', 'device', 'devote', 'differ', 'digits', 'dinner', 'direct', 'divide', 'dollar', 'domain', 'double', 'dozens', 'driven', 'driver', 'drives', 'during', 'easier', 'easily', 'eating', 'edited', 'editor', 'effect', 'effort', 'either', 'elects', 'enable', 'ending', 'enough', 'ensure', 'enters', 'entire', 'entity', 'eraser', 'errors', 'escape', 'evened', 'events', 'except', 'excess', 'excuse', 'exists', 'expand', 'expect', 'expert', 'extend', 'extent', 'factor', 'failed', 'fairly', 'fallen', 'family', 'famous', 'faster', 'father', 'faults', 'fewest', 'fields', 'figure', 'filing', 'filled', 'finger', 'finish', 'finite', 'firmly', 'fiscal', 'fishes', 'fitted', 'fixing', 'flight', 'floats', 'flying', 'follow', 'forced', 'forces', 'forget', 'forgot', 'formal', 'format', 'formed', 'former', 'fourth', 'freely', 'french', 'friend', 'future', 'gained', 'garden', 'gather', 'giving', 'global', 'gotten', 'grands', 'grants', 'grinds', 'ground', 'groups', 'growth', 'habits', 'handed', 'handle', 'hanged', 'happen', 'harder', 'hardly', 'having', 'headed', 'header', 'health', 'helped', 'hereby', 'hidden', 'hiding', 'higher', 'highly', 'honest', 'hoping', 'horses', 'ignore', 'images', 'impact', 'impose', 'inches', 'income', 'indeed', 'inform', 'inputs', 'insert', 'inside', 'insist', 'intend', 'invent', 'invite', 'issued', 'issues', 'itself', 'joined', 'killed', 'kindly', 'knocks', 'labels', 'lacked', 'ladies', 'landed', 'larger', 'latest', 'latter', 'layout', 'leaded', 'leader', 'learns', 'leaved', 'leaves', 'length', 'lesser', 'lesson', 'letter', 'levels', 'liable', 'lights', 'likely', 'liking', 'limits', 'linear', 'linked', 'listed', 'listen', 'little', 'living', 'loaded', 'locked', 'logged', 'longer', 'looked', 'losing', 'loudly', 'lowest', 'mainly', 'making', 'manage', 'manner', 'manual', 'marked', 'market', 'master', 'matter', 'medium', 'member', 'memory', 'merely', 'merits', 'method', 'middle', 'minded', 'minute', 'misled', 'missed', 'misses', 'misuse', 'mixing', 'models', 'modern', 'modify', 'moment', 'months', 'mostly', 'mother', 'motion', 'moving', 'myself', 'namely', 'naming', 'nation', 'nature', 'nearby', 'nearer', 'nearly', 'needed', 'nicest', 'nobody', 'normal', 'notice', 'notify', 'noting', 'number', 'object', 'obtain', 'occupy', 'occurs', 'offers', 'office', 'oldest', 'opened', 'oppose', 'option', 'orders', 'origin', 'others', 'output', 'owners', 'packet', 'papers', 'parent', 'partly', 'passed', 'passes', 'paying', 'people', 'period', 'permit', 'person', 'petrol', 'phrase', 'picked', 'pieces', 'placed', 'places', 'planet', 'played', 'please', 'plenty', 'pocket', 'points', 'police', 'policy', 'posted', 'pounds', 'powers', 'prefer', 'pretty', 'prices', 'prints', 'prompt', 'proper', 'proved', 'proves', 'public', 'pulled', 'purely', 'pushed', 'pushes', 'putted', 'quoted', 'quotes', 'raised', 'raises', 'random', 'rarely', 'rather', 'reader', 'really', 'reason', 'recall', 'recent', 'record', 'reduce', 'refers', 'refuse', 'regard', 'region', 'regret', 'reject', 'relate', 'remain', 'remark', 'remind', 'remote', 'remove', 'repair', 'repeat', 'report', 'resort', 'result', 'retain', 'return', 'reveal', 'review', 'rights', 'rubber', 'safely', 'safest', 'safety', 'sample', 'saving', 'saying', 'scheme', 'school', 'scores', 'screen', 'script', 'search', 'season', 'second', 'secret', 'secure', 'seeing', 'seemed', 'select', 'senior', 'serial', 'series', 'served', 'server', 'serves', 'settle', 'severe', 'shared', 'shares', 'should', 'showed', 'signal', 'signed', 'simple', 'simply', 'single', 'skills', 'slight', 'slower', 'slowly', 'smooth', 'social', 'solely', 'solved', 'solves', 'sooner', 'sorted', 'sought', 'sounds', 'source', 'spaces', 'speaks', 'speech', 'spells', 'spends', 'spirit', 'splits', 'spoken', 'spread', 'spring', 'square', 'stable', 'stages', 'stands', 'starts', 'stated', 'states', 'status', 'stayed', 'sticks', 'stones', 'stored', 'stores', 'stream', 'street', 'strict', 'strike', 'string', 'strong', 'struck', 'stupid', 'submit', 'subset', 'subtle', 'sudden', 'suffer', 'suited', 'summer', 'supply', 'surely', 'survey', 'switch', 'symbol', 'syntax', 'system', 'tables', 'taking', 'talked', 'target', 'taught', 'tested', 'thanks', 'theory', 'things', 'thinks', 'though', 'threat', 'thrown', 'throws', 'ticket', 'timing', 'titles', 'topics', 'toward', 'tracks', 'trains', 'travel', 'treats', 'trusts', 'trying', 'turned', 'twelve', 'twenty', 'typing', 'unable', 'unique', 'unless', 'unlike', 'update', 'upsets', 'useful', 'values', 'varied', 'varies', 'vastly', 'vector', 'virtue', 'vision', 'volume', 'waited', 'walked', 'wanted', 'warned', 'wasted', 'wastes', 'weapon', 'weight', 'wheels', 'whilst', 'widely', 'widest', 'willed', 'window', 'winter', 'wished', 'wishes', 'within', 'wonder', 'wooden', 'worded', 'worked', 'worker', 'worthy', 'writer', 'writes', 'yellow'],
    7: ['ability', 'absence', 'accepts', 'accords', 'account', 'achieve', 'acquire', 'actions', 'address', 'adopted', 'advance', 'advised', 'advises', 'affairs', 'affects', 'against', 'allowed', 'already', 'altered', 'amongst', 'amounts', 'amusing', 'ancient', 'annoyed', 'another', 'answers', 'anybody', 'apology', 'appears', 'applied', 'applies', 'approve', 'arguing', 'arrange', 'arrived', 'arrives', 'article', 'aspects', 'assumed', 'assumes', 'assured', 'assures', 'attempt', 'attends', 'attract', 'authors', 'average', 'avoided', 'awkward', 'backing', 'balance', 'battery', 'bearing', 'because', 'becomes', 'believe', 'belongs', 'benefit', 'besides', 'betting', 'between', 'bidding', 'biggest', 'binding', 'biology', 'bizarre', 'borrows', 'bothers', 'bracket', 'briefly', 'brother', 'brought', 'burying', 'calling', 'capable', 'capital', 'captain', 'careful', 'carried', 'carries', 'catches', 'causing', 'central', 'century', 'certain', 'chances', 'changed', 'changes', 'channel', 'chapter', 'charged', 'charges', 'cheaper', 'checked', 'chooses', 'circuit', 'citizen', 'claimed', 'clarify', 'classes', 'cleared', 'clearer', 'clearly', 'closely', 'closest', 'closing', 'collect', 'college', 'combine', 'command', 'comment', 'company', 'compare', 'complex', 'compose', 'compute', 'concept', 'concern', 'confirm', 'confuse', 'connect', 'consist', 'contact', 'contain', 'content', 'context', 'control', 'convert', 'copying', 'corners', 'correct', 'corrupt', 'costing', 'council', 'counted', 'counter', 'country', 'courses', 'covered', 'crashed', 'crashes', 'created', 'creates', 'culture', 'cumming', 'curious', 'current', 'cutting', 'damaged', 'damages', 'dealing', 'decided', 'decides', 'declare', 'deeming', 'default', 'defined', 'defines', 'degrees', 'deleted', 'deletes', 'deliver', 'demands', 'depends', 'derived', 'derives', 'designs', 'desired', 'desires', 'despite', 'destroy', 'details', 'detects', 'develop', 'devices', 'devoted', 'devotes', 'digital', 'directs', 'discuss', 'dislike', 'display', 'distant', 'disturb', 'divided', 'divides', 'drastic', 'drawing', 'drivers', 'driving', 'dropped', 'dubious', 'earlier', 'easiest', 'economy', 'editing', 'edition', 'editors', 'effects', 'efforts', 'elected', 'element', 'enables', 'ensured', 'ensures', 'entered', 'entitle', 'entries', 'equally', 'evening', 'exactly', 'examine', 'example', 'exclude', 'execute', 'existed', 'expands', 'expects', 'expense', 'experts', 'explain', 'express', 'extends', 'extract', 'extreme', 'factors', 'failing', 'failure', 'falling', 'farther', 'fashion', 'fastest', 'feature', 'federal', 'feeding', 'feeling', 'figures', 'filling', 'finally', 'finding', 'fingers', 'firstly', 'fitting', 'flashed', 'flashes', 'floated', 'follows', 'forcing', 'foreign', 'forever', 'forgets', 'forming', 'fortune', 'forward', 'freedom', 'friends', 'further', 'gaining', 'garbage', 'general', 'genuine', 'getting', 'granted', 'graphic', 'greater', 'greatly', 'grosses', 'grounds', 'growing', 'guessed', 'guesses', 'handing', 'handled', 'handles', 'hanging', 'happens', 'happily', 'hardest', 'harmful', 'heading', 'healthy', 'hearing', 'heavily', 'helpful', 'helping', 'herself', 'highest', 'himself', 'history', 'hitting', 'holding', 'holiday', 'however', 'hundred', 'husband', 'ignored', 'ignores', 'illegal', 'imagine', 'implied', 'implies', 'imposed', 'imposes', 'improve', 'incline', 'include', 'informs', 'initial', 'inserts', 'insists', 'install', 'instant', 'instead', 'integer', 'intends', 'invalid', 'invents', 'invited', 'invites', 'involve', 'isolate', 'issuing', 'joining', 'justify', 'keeping', 'killing', 'knocked', 'knowing', 'lacking', 'landing', 'largely', 'largest', 'leading', 'leaving', 'lecture', 'legally', 'lessons', 'letters', 'letting', 'library', 'limited', 'linking', 'listing', 'loading', 'locking', 'logging', 'logical', 'longest', 'looking', 'machine', 'managed', 'manager', 'manages', 'manuals', 'marking', 'massive', 'matches', 'matters', 'maximum', 'meaning', 'measure', 'medical', 'mediums', 'meeting', 'members', 'mention', 'message', 'methods', 'million', 'minding', 'minimal', 'minimum', 'minutes', 'mislead', 'missing', 'mistake', 'mistook', 'monitor', 'morning', 'natural', 'naughty', 'nearest', 'needing', 'neither', 'nervous', 'network', 'nothing', 'noticed', 'notices', 'nowhere', 'numbers', 'numbest', 'objects', 'obscure', 'observe', 'obtains', 'obvious', 'offered', 'officer', 'offices', 'omitted', 'opening', 'operate', 'opinion', 'opposed', 'opposes', 'options', 'ordered', 'outside', 'overall', 'package', 'painful', 'partial', 'parties', 'passing', 'patient', 'pattern', 'perfect', 'perform', 'perhaps', 'permits', 'persons', 'phrases', 'picking', 'picture', 'placing', 'planned', 'plastic', 'playing', 'pleased', 'pleases', 'pointed', 'popular', 'posting', 'precise', 'prefers', 'prepare', 'present', 'pressed', 'presses', 'presume', 'prevent', 'primary', 'printed', 'printer', 'private', 'problem', 'process', 'produce', 'product', 'project', 'promise', 'propose', 'protect', 'protest', 'provide', 'proving', 'publish', 'pulling', 'purpose', 'pushing', 'putting', 'qualify', 'quality', 'quarter', 'quicker', 'quickly', 'quietly', 'quoting', 'raising', 'rapidly', 'reached', 'reaches', 'readers', 'readily', 'reading', 'reality', 'reasons', 'receive', 'records', 'recover', 'reduced', 'reduces', 'reflect', 'refused', 'refuses', 'regards', 'regular', 'rejects', 'related', 'relates', 'release', 'remains', 'remarks', 'reminds', 'removal', 'removed', 'removes', 'repeats', 'replace', 'replied', 'replies', 'reports', 'request', 'require', 'reserve', 'respect', 'respond', 'restart', 'restore', 'results', 'returns', 'reveals', 'reverse', 'rewrite', 'ridding', 'roughly', 'routine', 'rubbish', 'running', 'satisfy', 'schools', 'science', 'scratch', 'screens', 'seconds', 'section', 'seeking', 'seeming', 'selects', 'selling', 'seminar', 'sending', 'serious', 'service', 'serving', 'session', 'setting', 'settled', 'settles', 'several', 'sharing', 'shopped', 'shorter', 'shortly', 'showing', 'signals', 'signing', 'similar', 'simpler', 'sitting', 'slowest', 'smaller', 'society', 'solving', 'somehow', 'someone', 'soonest', 'sorting', 'sounded', 'sources', 'speaker', 'special', 'specify', 'spotted', 'spreads', 'started', 'stating', 'station', 'staying', 'stopped', 'storage', 'storing', 'strange', 'strikes', 'strings', 'student', 'studied', 'studies', 'subject', 'submits', 'succeed', 'success', 'suffers', 'suffice', 'suggest', 'suiting', 'summary', 'support', 'suppose', 'surface', 'survive', 'suspect', 'suspend', 'symbols', 'systems', 'talking', 'teacher', 'teaches', 'tedious', 'telling', 'testing', 'thereby', 'thought', 'through', 'tickets', 'tonight', 'totally', 'touched', 'touches', 'towards', 'traffic', 'trained', 'trapped', 'treated', 'trivial', 'trouble', 'trusted', 'turning', 'typical', 'unaware', 'unclear', 'unhappy', 'uniform', 'unknown', 'unusual', 'updated', 'updates', 'upwards', 'useless', 'usually', 'utility', 'utterly', 'vaguely', 'variety', 'various', 'varying', 'version', 'visible', 'waiting', 'walking', 'wanting', 'warning', 'wasting', 'watched', 'watches', 'wearing', 'weather', 'weekend', 'welcome', 'western', 'whereas', 'whereby', 'whether', 'whoever', 'willing', 'windows', 'winning', 'wishing', 'without', 'wonders', 'wording', 'workers', 'working', 'worried', 'worries', 'writing', 'written'],
    8: ['absolute', 'academic', 'accepted', 'accident', 'accorded', 'accounts', 'accuracy', 'accurate', 'achieved', 'achieves', 'acquired', 'acquires', 'activity', 'actually', 'addition', 'adequate', 'admitted', 'adopting', 'advanced', 'advances', 'advising', 'affected', 'agreeing', 'allowing', 'altering', 'although', 'analogue', 'analysis', 'announce', 'annoying', 'answered', 'anyplace', 'anything', 'anywhere', 'apparent', 'appeared', 'applying', 'approach', 'approval', 'approved', 'approves', 'argument', 'arranged', 'arranges', 'arriving', 'articles', 'assembly', 'assuming', 'assuring', 'attached', 'attaches', 'attempts', 'attended', 'attitude', 'audience', 'avoiding', 'becoming', 'believed', 'believes', 'benefits', 'borrowed', 'bothered', 'brackets', 'branches', 'breaking', 'bringing', 'building', 'bulletin', 'business', 'campaign', 'capacity', 'carrying', 'cassette', 'catching', 'category', 'chairman', 'changing', 'channels', 'charging', 'cheapest', 'checking', 'chemical', 'children', 'choosing', 'claiming', 'clearest', 'clearing', 'collapse', 'collects', 'colleges', 'combined', 'combines', 'commands', 'comments', 'commonly', 'compared', 'compares', 'compiler', 'complain', 'complete', 'composed', 'composes', 'computed', 'computer', 'computes', 'concerns', 'concrete', 'confirms', 'confused', 'confuses', 'connects', 'consider', 'consists', 'constant', 'contains', 'contents', 'continue', 'contract', 'contrary', 'contrast', 'controls', 'convince', 'corrects', 'corrupts', 'counting', 'covering', 'crashing', 'creating', 'creation', 'creature', 'critical', 'customer', 'damaging', 'database', 'deciding', 'decision', 'declared', 'declares', 'decrease', 'dedicate', 'defining', 'definite', 'deleting', 'delivers', 'delivery', 'depended', 'deriving', 'describe', 'designed', 'desiring', 'destroys', 'detailed', 'detected', 'develops', 'devoting', 'directed', 'directly', 'director', 'disagree', 'disaster', 'discount', 'discover', 'displays', 'distance', 'distinct', 'district', 'disturbs', 'dividing', 'division', 'document', 'doubtful', 'dropping', 'earliest', 'economic', 'electing', 'election', 'electric', 'elements', 'elevator', 'emphasis', 'employee', 'engineer', 'enormous', 'ensuring', 'entering', 'entirely', 'entitled', 'entitles', 'entrance', 'estimate', 'evenings', 'everyone', 'evidence', 'examined', 'examines', 'examples', 'exchange', 'excluded', 'excludes', 'executed', 'executes', 'exercise', 'existing', 'expanded', 'expected', 'explains', 'explicit', 'extended', 'external', 'facility', 'familiar', 'farthest', 'feasible', 'features', 'feedback', 'finished', 'finishes', 'flashing', 'flexible', 'floating', 'followed', 'fraction', 'frequent', 'friendly', 'function', 'furthest', 'gasoline', 'generate', 'governor', 'graduate', 'granting', 'graphics', 'grateful', 'greatest', 'grinding', 'guessing', 'handling', 'happened', 'hardware', 'harmless', 'holidays', 'horrible', 'hospital', 'hundreds', 'identify', 'identity', 'ignoring', 'implying', 'imposing', 'improved', 'improves', 'incident', 'inclined', 'inclines', 'included', 'includes', 'increase', 'indicate', 'industry', 'inferior', 'infinite', 'informed', 'initials', 'innocent', 'inputted', 'inserted', 'insisted', 'installs', 'instance', 'integers', 'integral', 'intended', 'interact', 'interest', 'internal', 'interval', 'invented', 'inviting', 'involved', 'involves', 'irritate', 'isolated', 'isolates', 'keyboard', 'knocking', 'language', 'learning', 'lectures', 'lifetime', 'likewise', 'limiting', 'location', 'machines', 'magnetic', 'maintain', 'majority', 'managing', 'marriage', 'material', 'meanings', 'measured', 'measures', 'mechanic', 'meetings', 'mentions', 'messages', 'midnight', 'military', 'millions', 'minority', 'misleads', 'mistaken', 'mistakes', 'modified', 'modifies', 'mornings', 'movement', 'multiple', 'national', 'negative', 'networks', 'nonsense', 'normally', 'noticing', 'nowadays', 'numerous', 'objected', 'observed', 'observes', 'obtained', 'occasion', 'occupied', 'occupies', 'occurred', 'offering', 'official', 'omitting', 'operated', 'operates', 'operator', 'opinions', 'opposing', 'opposite', 'optional', 'ordering', 'ordinary', 'original', 'packages', 'parallel', 'patterns', 'peculiar', 'performs', 'personal', 'persuade', 'physical', 'pictures', 'planning', 'pleasant', 'pleasing', 'pointing', 'policies', 'position', 'positive', 'possible', 'possibly', 'powerful', 'prepared', 'prepares', 'presence', 'presents', 'preserve', 'pressing', 'pressure', 'prevents', 'previous', 'printers', 'printing', 'printout', 'probably', 'problems', 'produced', 'produces', 'products', 'progress', 'projects', 'promised', 'promises', 'promptly', 'properly', 'property', 'proposal', 'proposed', 'proposes', 'prospect', 'protects', 'provided', 'provides', 'publicly', 'puncture', 'purchase', 'purposes', 'quantity', 'question', 'quickest', 'quitting', 'randomly', 'reaching', 'reaction', 'readable', 'received', 'receives', 'recently', 'recorded', 'recovers', 'reducing', 'referred', 'reflects', 'refusing', 'regarded', 'register', 'rejected', 'relating', 'relation', 'relative', 'released', 'releases', 'relevant', 'reliable', 'religion', 'remained', 'remember', 'reminded', 'remotely', 'removing', 'repeated', 'replaced', 'replaces', 'replying', 'reported', 'requests', 'required', 'requires', 'research', 'reserved', 'reserves', 'resident', 'resource', 'respects', 'response', 'restored', 'restores', 'restrict', 'resulted', 'returned', 'revealed', 'sciences', 'searched', 'searches', 'secondly', 'sections', 'security', 'selected', 'sensible', 'sensibly', 'sentence', 'separate', 'sequence', 'services', 'sessions', 'settling', 'severely', 'shopping', 'shortage', 'shortest', 'shutting', 'simplest', 'slightly', 'smallest', 'software', 'solution', 'somebody', 'sometime', 'somewhat', 'sounding', 'southern', 'speakers', 'speaking', 'specific', 'spelling', 'spending', 'spotting', 'standard', 'standing', 'starting', 'stations', 'sticking', 'stopping', 'straight', 'strategy', 'strength', 'strictly', 'striking', 'strongly', 'students', 'studying', 'subjects', 'suddenly', 'suffered', 'suggests', 'suitable', 'suitably', 'superior', 'supplied', 'supplies', 'supports', 'supposed', 'supposes', 'surprise', 'survived', 'survives', 'suspects', 'suspends', 'switched', 'switches', 'teaching', 'tendency', 'terminal', 'terribly', 'thinking', 'thoughts', 'thousand', 'throwing', 'together', 'tomorrow', 'touching', 'training', 'transfer', 'trapping', 'treating', 'trusting', 'ultimate', 'unlikely', 'unwanted', 'updating', 'vacation', 'validity', 'valuable', 'variable', 'versions', 'watching', 'welcomed', 'welcomes', 'whatever', 'whenever', 'wherever', 'withdraw', 'wondered', 'worrying', 'yourself'],
    9: ['abilities', 'accepting', 'according', 'achieving', 'acquiring', 'addressed', 'addresses', 'admitting', 'advancing', 'advantage', 'advertise', 'affecting', 'afternoon', 'agreement', 'algorithm', 'alternate', 'ambiguous', 'anonymous', 'answering', 'apologies', 'appearing', 'approving', 'arbitrary', 'arguments', 'arranging', 'assembler', 'assistant', 'associate', 'attaching', 'attempted', 'attending', 'attention', 'authority', 'automatic', 'available', 'backwards', 'basically', 'beautiful', 'beginning', 'believing', 'borrowing', 'bothering', 'broadcast', 'buildings', 'calculate', 'candidate', 'cardboard', 'carefully', 'certainly', 'character', 'collected', 'combining', 'commented', 'committee', 'community', 'comparing', 'complains', 'complaint', 'completed', 'completes', 'component', 'composing', 'computers', 'computing', 'concerned', 'condition', 'confident', 'confirmed', 'confusing', 'confusion', 'connected', 'considers', 'construct', 'contained', 'continued', 'continues', 'convinced', 'convinces', 'corrected', 'correctly', 'corrupted', 'criticism', 'currently', 'dangerous', 'decisions', 'declaring', 'dedicated', 'dedicates', 'delivered', 'depending', 'described', 'describes', 'designing', 'desirable', 'desperate', 'destroyed', 'detailing', 'detecting', 'determine', 'developed', 'different', 'difficult', 'directing', 'direction', 'directory', 'disappear', 'discovers', 'discussed', 'discusses', 'displayed', 'disturbed', 'documents', 'education', 'effective', 'efficient', 'elsewhere', 'embarrass', 'emergency', 'encounter', 'encourage', 'engineers', 'entitling', 'equipment', 'essential', 'establish', 'everybody', 'examining', 'excellent', 'exception', 'excessive', 'excluding', 'exclusive', 'executing', 'existence', 'expanding', 'expansion', 'expecting', 'expensive', 'explained', 'expressed', 'expresses', 'extending', 'extension', 'extensive', 'extremely', 'financial', 'finishing', 'following', 'forgotten', 'functions', 'generally', 'generated', 'generates', 'gradually', 'guarantee', 'happening', 'hopefully', 'identical', 'immediate', 'implement', 'important', 'improving', 'inability', 'inclining', 'including', 'incorrect', 'increased', 'increases', 'indicates', 'influence', 'informing', 'initially', 'inputting', 'inserting', 'insisting', 'installed', 'instantly', 'insurance', 'intending', 'intention', 'interests', 'interface', 'interpret', 'intervals', 'introduce', 'inventing', 'invisible', 'involving', 'irritated', 'irritates', 'isolating', 'justified', 'justifies', 'knowledge', 'languages', 'libraries', 'literally', 'locations', 'magnitude', 'maintains', 'materials', 'measuring', 'mechanics', 'mechanism', 'mentioned', 'mistaking', 'modifying', 'movements', 'naturally', 'necessary', 'necessity', 'numerical', 'objecting', 'objection', 'observing', 'obtaining', 'obviously', 'occasions', 'occupying', 'occurring', 'operating', 'operation', 'operators', 'otherwise', 'ourselves', 'paragraph', 'partially', 'perfectly', 'performed', 'permanent', 'permitted', 'persuaded', 'persuades', 'pointless', 'political', 'positions', 'potential', 'practical', 'precisely', 'preferred', 'preparing', 'presented', 'president', 'prevented', 'primitive', 'principle', 'procedure', 'processed', 'processes', 'processor', 'producing', 'promising', 'proposing', 'protected', 'providing', 'publicity', 'published', 'publishes', 'qualified', 'qualifies', 'questions', 'receiving', 'reception', 'recommend', 'recording', 'recovered', 'reduction', 'redundant', 'reference', 'referring', 'reflected', 'regarding', 'registers', 'regularly', 'rejecting', 'releasing', 'relevance', 'religious', 'reluctant', 'remaining', 'remembers', 'reminding', 'repeating', 'replacing', 'reporting', 'represent', 'reproduce', 'requested', 'requiring', 'reserving', 'resourced', 'resources', 'responses', 'restoring', 'restricts', 'resulting', 'returning', 'revealing', 'satisfied', 'satisfies', 'searching', 'secondary', 'secretary', 'selecting', 'selection', 'sensitive', 'sentences', 'sequences', 'seriously', 'similarly', 'sincerely', 'situation', 'solutions', 'someplace', 'something', 'sometimes', 'somewhere', 'specially', 'specified', 'specifies', 'splitting', 'spreading', 'standards', 'statement', 'statistic', 'structure', 'submitted', 'suffering', 'suggested', 'supplying', 'supported', 'supposing', 'surprised', 'surprises', 'surviving', 'suspected', 'suspended', 'suspicion', 'switching', 'technical', 'technique', 'telephone', 'temporary', 'terminals', 'therefore', 'thousands', 'transfers', 'translate', 'transport', 'treatment', 'uncertain', 'universal', 'unlimited', 'upsetting', 'vacations', 'variables', 'variation', 'virtually', 'welcoming', 'wonderful', 'wondering', 'yesterday'],
    10: ['absolutely', 'acceptable', 'accessible', 'accidental', 'activities', 'additional', 'addressing', 'admittedly', 'advantages', 'advertised', 'advertises', 'algorithms', 'altogether', 'apparently', 'appearance', 'appreciate', 'arithmetic', 'artificial', 'associated', 'associates', 'assumption', 'atmosphere', 'attempting', 'attractive', 'automobile', 'background', 'beforehand', 'broadcasts', 'categories', 'characters', 'collecting', 'collection', 'commenting', 'commercial', 'commission', 'commitment', 'comparable', 'comparison', 'compatible', 'complained', 'complaints', 'completely', 'completing', 'complexity', 'complicate', 'components', 'compromise', 'compulsory', 'concerning', 'conclusion', 'conditions', 'conference', 'confirming', 'connecting', 'connection', 'considered', 'consistent', 'constraint', 'containing', 'continuing', 'continuous', 'contribute', 'controlled', 'convenient', 'convention', 'convincing', 'correcting', 'correction', 'corrupting', 'dedicating', 'definitely', 'definition', 'definitive', 'deliberate', 'delivering', 'democratic', 'department', 'describing', 'destroying', 'determined', 'determines', 'developing', 'dictionary', 'difference', 'difficulty', 'directions', 'disappears', 'discipline', 'discourage', 'discovered', 'discussing', 'discussion', 'displaying', 'distinctly', 'distribute', 'disturbing', 'documented', 'electronic', 'encounters', 'encouraged', 'encourages', 'engineered', 'equivalent', 'especially', 'eventually', 'everything', 'everywhere', 'exceptions', 'experience', 'experiment', 'explaining', 'expressing', 'expression', 'facilities', 'forgetting', 'frequently', 'generating', 'generation', 'government', 'guaranteed', 'guarantees', 'historical', 'implements', 'importance', 'impossible', 'impression', 'inadequate', 'incomplete', 'increasing', 'indication', 'individual', 'industrial', 'inevitably', 'installing', 'interested', 'interprets', 'introduced', 'introduces', 'invariably', 'invitation', 'irrelevant', 'irritating', 'justifying', 'laboratory', 'literature', 'maintained', 'meaningful', 'membership', 'mentioning', 'misleading', 'mysterious', 'objections', 'occasional', 'operations', 'opposition', 'originally', 'particular', 'performing', 'permission', 'permitting', 'personally', 'persuading', 'phenomenon', 'philosophy', 'population', 'postmaster', 'preferable', 'preferably', 'preference', 'preferring', 'presenting', 'presumably', 'preventing', 'previously', 'principles', 'processing', 'processors', 'production', 'programmer', 'properties', 'proportion', 'protecting', 'protection', 'publishing', 'qualifying', 'quantities', 'reasonable', 'reasonably', 'recommends', 'recovering', 'references', 'reflecting', 'reflection', 'regardless', 'registered', 'regulation', 'relatively', 'remembered', 'repeatedly', 'represents', 'requesting', 'resolution', 'resourcing', 'restricted', 'ridiculous', 'satisfying', 'scientific', 'separately', 'situations', 'specifying', 'statements', 'statistics', 'structures', 'submitting', 'subsequent', 'substitute', 'successful', 'sufficient', 'suggesting', 'suggestion', 'supervisor', 'supporting', 'supposedly', 'surprising', 'suspecting', 'suspending', 'techniques', 'technology', 'television', 'themselves', 'thoroughly', 'throughout', 'translated', 'translates', 'ultimately', 'underneath', 'understand', 'understood', 'university', 'unpleasant', 'unsuitable', 'whatsoever', 'widespread', 'worthwhile'],
    11: ['accordingly', 'advertising', 'alternative', 'application', 'appreciated', 'appreciates', 'appropriate', 'arrangement', 'associating', 'association', 'authorities', 'calculation', 'circulation', 'combination', 'communicate', 'competition', 'complaining', 'complicated', 'complicates', 'composition', 'connections', 'consequence', 'considering', 'consistency', 'constraints', 'consumption', 'continually', 'controlling', 'conventions', 'definitions', 'demonstrate', 'description', 'determining', 'development', 'differences', 'differently', 'disappeared', 'discouraged', 'discourages', 'discovering', 'discussions', 'distinction', 'distinguish', 'distributed', 'distributes', 'documenting', 'educational', 'effectively', 'electronics', 'embarrassed', 'embarrasses', 'encountered', 'encouraging', 'engineering', 'environment', 'essentially', 'established', 'establishes', 'experienced', 'experiences', 'experiments', 'explanation', 'forthcoming', 'fortunately', 'fundamental', 'imagination', 'immediately', 'implemented', 'implication', 'importantly', 'improvement', 'independent', 'individuals', 'information', 'institution', 'instruction', 'intelligent', 'interesting', 'interpreted', 'introducing', 'investigate', 'maintaining', 'mathematics', 'meaningless', 'necessarily', 'observation', 'opportunity', 'performance', 'permanently', 'possibility', 'potentially', 'practically', 'preparation', 'programmers', 'publication', 'punctuation', 'recognition', 'recommended', 'registering', 'regulations', 'remembering', 'replacement', 'represented', 'requirement', 'responsible', 'restricting', 'significant', 'statistical', 'substantial', 'suggestions', 'temperature', 'temporarily', 'terminology', 'theoretical', 'traditional', 'transferred', 'translating', 'translation', 'understands', 'unfortunate', 'unnecessary'],
    12: ['accidentally', 'alternatives', 'announcement', 'applications', 'appreciating', 'arrangements', 'broadcasting', 'calculations', 'circumstance', 'combinations', 'complicating', 'consequences', 'consequently', 'considerable', 'considerably', 'continuation', 'continuously', 'contribution', 'conventional', 'conversation', 'deliberately', 'descriptions', 'difficulties', 'disadvantage', 'disappearing', 'discouraging', 'distributing', 'distribution', 'embarrassing', 'encountering', 'establishing', 'experiencing', 'experimental', 'guaranteeing', 'implementing', 'implications', 'improvements', 'incidentally', 'incompatible', 'inconsistent', 'individually', 'institutions', 'instructions', 'intelligence', 'interpreting', 'intervention', 'introduction', 'manipulation', 'mathematical', 'nevertheless', 'occasionally', 'particularly', 'professional', 'recommending', 'relationship', 'representing', 'requirements', 'respectively', 'significance', 'simultaneous', 'sophisticate', 'specifically', 'successfully', 'sufficiently', 'transferring', 'unacceptable', 'universities', 'unreasonable']
};

function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}

var audio1 = document.getElementById("hitMusic");
function playHitSound(){
    audio1.play();
}
var audio2 = document.getElementById("clickMusic");
function playClickSound(){
    audio2.play();
}


/**
 * 保存每一个单词的当前状态
 * @type {{word: {x: number, y: number}}}
 */
var wordsDisplay = {"word": {"x" : 0, "y" : 0}};

var wordGen = function(){
    var i = randomNum(2,12);
    var wordArr = WORDS[i];
    var ix = randomNum(0,wordArr.length - 1);
    var wd = wordArr[ix];
    wordsDisplay[wd] = {};
    return wd;
};

var charGen = function(word){
    var chars = word.split("");
};

$ = function (id) {
    return document.getElementById(id);
};

var c = $('c');//获取画布对象
var ctx = c.getContext('2d');//获取2d画笔对象
var bc = 20;
var hasLockWord = false;//是否已经有单词锁定

function drawGrid() {
    //画横线
    for (var i = 0; i <= c.width; i = i + bc) {
        ctx.strokeStyle = 'gray';
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.moveTo(0, i);
        ctx.lineTo(c.width, i);
        ctx.stroke();
    }
    //画竖线
    for (var i = 0; i <= c.height; i = i + bc) {
        ctx.strokeStyle = 'gray';
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.moveTo(i, 0);
        ctx.lineTo(i, c.height);
        ctx.stroke();
    }
}



!function () {
    //drawGrid();
    //setTimeout(arguments.callee, 200);
}();

function drawChar(char, x, y){
    ctx.font= bc + "px Verdana";
    ctx.strokeStyle = 'red';
    ctx.strokeText(char,x ,y);
}

var charNode = function(char, x, y){
    this.char = char;
    this.x = x;
    this.y = y;
};

var charXY = function(char, x, y){
  this.char = char;
  this.x = x;
  this.y = y;
};

/**
 * @param word
 * @param endIndex,从0个字符到第endIndex个字符被标识已经击中
 */
var wordState = function(lock, word,endIndex, x, y){
    this.lock = lock;//锁定状态的单词,即该单词至少已经击中了一个字母
    this.word = word;
    this.andIndex = endIndex;
    this.x = x;
    this.y = y;
    this.charXY = [];
};

var charNodes = [];
var charnode1 = new charNode('china', bc, bc);
charNodes.push(charnode1);

var existsWord = [];
var wordStates = [];

document.onkeyup = function(ev){

    playClickSound();

    var inputChar = String.fromCharCode(ev.keyCode).toLowerCase();

    if(hasLockWord){
        for(var i = 0;i < wordStates.length; i++){
            var ws = wordStates[i];
            if(!ws.lock){
                continue;
            }
            var endIndex = ws.andIndex;
            var wd = ws.word;
            var chars = wd.split("");
            for(var k = 0; k < chars.length; k++){
                if(chars[k] === inputChar){
                    playHitSound();
                    //集中字母的个数大于1且小于单词的总字母个数
                    if(k < chars.length-1){
                        ws.andIndex++;
                    }
                    //单词的最后一个字母被击中,该单词消失,有全局锁定的单词的标识置否
                    if(k === chars.length-1){
                        hasLockWord = false;
                        chearWord(wordStates[i], wordStates[i].x, wordStates[i].y);
                        wordStates.remove(i);
                        //ctx.clearRect(0,0, c.width, c.height);
                        chearWord(wd, ws.x,ws.y);
                    }
                    return;
                }
            }
        }
    }else{
        for(var i = 0;i < wordStates.length; i++){
            var ws = wordStates[i];
            var endIndex = ws.andIndex;
            var wd = ws.word;
            var chars = wd.split("");
            for(var k = 0; k < chars.length; k++){
                if(chars[k] === inputChar){
                    playHitSound();
                    //第一次击中，锁定单词
                    if(k === 0 && endIndex === -1){
                        hasLockWord = true;
                        ws.lock = true;
                        ws.andIndex = 0;
                    }else{
                        //集中字母的个数大于1且小于单词的总字母个数
                        if(k < chars.length-1){
                            ws.andIndex++;
                        }

                        //单词的最后一个字母被击中,该单词消失,有全局锁定的单词的标识置否
                        if(k === chars.length-1){
                            hasLockWord = false;
                            chearWord(wordStates[i], wordStates[i].x, wordStates[i].y);
                            wordStates.remove(i);
                            //ctx.clearRect(0,0, c.width, c.height);
                            chearWord(wd, ws.x,ws.y);
                        }
                    }
                    return;
                }
            }
        }
    }
};

/**
 * fillText单个字母
 * @param char
 * @param x
 * @param y
 * @param hit
 */
function drewChar(char,x, y, hit){
    ctx.font= bc * 0.75 + "px Verdana";
    if(hit){
        ctx.fillStyle = 'red';
    }else{
        ctx.fillStyle = 'black';
    }
    ctx.fillText(char, x, y);
    return ctx.measureText(char).width;
}

function chearWord(word, x, y){
    ctx.fillStyle = 'white';
    ctx.font= bc * 0.75 + "px Verdana";
    ctx.fillText(word, x, y);

    ctx.strokeStyle = 'white';
    ctx.strokeText(word, x, y);
    ctx.fillText(word, x, y);

    //ctx.clearRect(x ,y, ctx.measureText(word), bc * 0.75);
}


    !function initGanme(){
        //显示的活动的单词的个数
        while(wordStates.length < 10){
            var word = wordGen();
            wordStates.push(new wordState(false,word, -1, randomNum(0, c.width),bc));
        }
        setTimeout(arguments.callee, 200);
    }();

!function () {

    var wordx = 0;
    var wordy = 0;
    for(var i = 0; i < wordStates.length; i++){
        var ws = wordStates[i];
        var wd = ws.word;

        wordx = ws.x;
        wordy = ws.y;

        var endIndex = ws.andIndex;
        var chars = wd.split("");

        if(existsWord.contains(wd)){
            chearWord(wd, wordx, wordy);
        }
        var dirflag = randomNum(1,100) > 50 ? 1 : -1;
        var randomOffeset = randomNum(2,8);
        if(wordx + ws.x +  randomOffeset * dirflag > c.width - 100 || wordx + ws.x +  randomOffeset * dirflag <= bc){
            dirflag *= -1;
        }
        wordx += randomOffeset * dirflag;
        wordy += randomOffeset / 10;
        if(wordx < 0){
            wordx = 10;
        }else if(wordx > c.width){
            wordx = c.width - 20;
        }

        wordStates[i].x = wordx;
        wordStates[i].y = wordy;
        var charW = 0;//每个字母的像素宽
        var charX = wordx;//每个字母的X坐标
        for(var k =0;k < chars.length; k++){
            charW = drewChar(chars[k], charX, wordy, k <= endIndex ? true : false);
            existsWord.push(wd);
            charX += charW;
            var charXYObj = new charXY(chars[k], charX, wordy);
            ws.charXY.push(charXYObj);
        }
    }


    setTimeout(arguments.callee, 100);
}();









