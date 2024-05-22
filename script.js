let nounArray = ["accelerator", "accordion", "account", "accountant", "acknowledgment", "acoustic", "acrylic", "act", "action", "active", "activity", "actor", "actress", "adapter", "addition", "address", "adjustment", "adult", "advantage", "advertisement", "advice", "afghanistan", "africa", "aftermath", "afternoon", "aftershave", "afterthought", "age", "agenda", "agreement", "air", "airbus", "airmail", "airplane", "airport", "airship", "alarm", "albatross", "alcohol", "algebra", "algeria", "alibi", "alley", "alligator", "alloy", "almanac", "alphabet", "alto", "aluminium", "aluminum", "ambulance", "america", "amount", "amusement", "anatomy", "anethesiologist", "anger", "angle", "angora", "animal", "anime", "ankle", "answer", "ant", "antarctica", "anteater", "antelope", "anthony", "anthropology", "apartment", "apology", "apparatus", "apparel", "appeal", "appendix", "apple", "appliance", "approval", "april", "aquarius", "arch", "archaeology", "archeology", "archer", "architecture", "area", "argentina", "argument", "aries", "arithmetic", "arm", "armadillo", "armchair", "armenian", "army", "arrow", "art", "ash", "ashtray", "asia", "asparagus", "asphalt", "asterisk", "astronomy", "athlete", "atm", "atom", "attack", "attempt", "attention", "attic", "attraction", "august", "aunt", "australia", "australian", "author", "authorisation", "authority", "authorization", "avenue", "babies", "baboon", "baby", "back", "backbone", "bacon", "badge", "badger", "bag", "bagel", "bagpipe", "bail", "bait", "baker", "bakery", "balance", "balinese", "ball", "balloon", "bamboo", "banana", "band", "bandana", "bangladesh", "bangle", "banjo", "bank", "bankbook", "banker", "bar", "barbara", "barber", "barge", "baritone", "barometer", "base", "baseball", "basement", "basin", "basket", "basketball", "bass", "bassoon", "bat", "bath", "bathroom", "bathtub", "battery", "battle", "bay", "beach", "bead", "beam", "bean", "bear", "beard", "beast", "beat", "beautician", "beauty", "beaver", "bed", "bedroom", "bee", "beech", "beef", "beer", "beet", "beetle", "beggar", "beginner", "begonia", "behavior", "belgian", "belief", "believe", "bell", "belt", "bench", "bengal", "beret", "berry", "bestseller", "betty", "bibliography", "bicycle", "bike", "bill", "billboard", "biology", "biplane", "birch", "bird", "birth", "birthday", "bit", "bite", "black", "bladder", "blade", "blanket", "blinker", "blizzard", "block", "blood", "blouse", "blow", "blowgun", "blue", "board", "boat", "bobcat", "body", "bolt", "bomb", "bomber", "bone", "bongo", "bonsai", "book", "bookcase", "booklet", "boot", "border", "botany", "bottle", "bottom", "boundary", "bow", "bowl", "bowling", "box", "boy", "bra", "brace", "bracket", "brain", "brake", "branch", "brand", "brandy", "brass", "brazil", "bread", "break", "breakfast", "breath", "brian", "brick", "bridge", "british", "broccoli", "brochure", "broker", "bronze", "brother", "brother-in-law", "brow", "brown", "brush", "bubble", "bucket", "budget", "buffer", "buffet", "bugle", "building", "bulb", "bull", "bulldozer", "bumper", "bun", "burglar", "burma", "burn", "burst", "bus", "bush", "business", "butane", "butcher", "butter", "button", "buzzard", "c-clamp", "cabbage", "cabinet", "cable", "cactus", "cafe", "cake", "calculator", "calculus", "calendar", "calf", "call", "camel", "camera", "camp", "can", "canada", "canadian", "cancer", "candle", "cannon", "canoe", "canvas", "cap", "capital", "cappelletti", "capricorn", "captain", "caption", "car", "caravan", "carbon", "card", "cardboard", "cardigan", "care", "carnation", "carol", "carp", "carpenter", "carriage", "carrot", "cart", "cartoon", "case", "cast", "castanet", "cat", "catamaran", "caterpillar", "cathedral", "catsup", "cattle", "cauliflower", "cause", "caution", "cave", "cd", "ceiling", "celery", "celeste", "cell", "cellar", "cello", "celsius", "cement", "cemetery", "cent", "centimeter", "century", "ceramic", "cereal", "certification", "chain", "chair", "chalk", "chance", "change", "channel", "character", "chard", "charles", "chauffeur", "check", "cheek", "cheese", "cheetah", "chef", "chemistry", "cheque", "cherries", "cherry", "chess", "chest", "chick", "chicken", "chicory", "chief", "child", "children", "chill", "chime", "chimpanzee", "chin", "china", "chinese", "chive", "chocolate", "chord", "christmas", "christopher", "chronometer", "church", "cicada", "cinema", "circle", "circulation", "cirrus", "citizenship", "city", "clam", "clarinet", "class", "claus", "clave", "clef", "clerk", "click", "client", "climb", "clipper", "cloakroom", "clock", "close", "closet", "cloth", "cloud", "cloudy", "clover", "club", "clutch", "coach", "coal", "coast", "coat", "cobweb", "cockroach", "cocktail", "cocoa", "cod", "coffee", "coil", "coin", "coke", "cold", "collar", "college", "collision", "colombia", "colon", "colony", "color", "colt", "column", "columnist", "comb", "comfort", "comic", "comma", "command", "commission", "committee", "community", "company", "comparison", "competition", "competitor", "composer", "composition", "computer", "condition", "condor", "cone", "confirmation", "conga", "congo", "conifer", "connection", "consonant", "continent", "control", "cook", "cooking", "copper", "copy", "copyright", "cord", "cork", "cormorant", "corn", "cornet", "correspondent", "cost", "cotton", "couch", "cougar", "cough", "country", "course", "court", "cousin", "cover", "cow", "cowbell", "crab", "crack", "cracker", "craftsman", "crate", "crawdad", "crayfish", "crayon", "cream", "creator", "creature", "credit", "creditor", "creek", "crib", "cricket", "crime", "criminal", "crocodile", "crocus", "croissant", "crook", "crop", "cross", "crow", "crowd", "crown", "crush", "cry", "cub", "cuban", "cucumber", "cultivator", "cup", "cupboard", "cupcake", "curler", "currency", "current", "curtain", "curve", "cushion", "custard", "customer", "cut", "cuticle", "cycle", "cyclone", "cylinder", "cymbal", "dad", "daffodil", "dahlia", "daisy", "damage", "dance", "dancer", "danger", "daniel", "dash", "dashboard", "database", "date", "daughter", "david", "day", "dead", "deadline", "deal", "death", "deborah", "debt", "debtor", "decade", "december", "decimal", "decision", "decrease", "dedication", "deer", "defense", "deficit", "degree", "delete", "delivery", "den", "denim", "dentist", "deodorant", "department", "deposit", "description", "desert", "design", "desire", "desk", "dessert", "destruction", "detail", "detective", "development", "dew", "diamond", "diaphragm", "dibble", "dictionary", "dietician", "difference", "digestion", "digger", "digital", "dill", "dime", "dimple", "dinghy", "dinner", "dinosaur", "diploma", "dipstick", "direction", "dirt", "disadvantage", "discovery", "discussion", "disease", "disgust", "dish", "distance", "distribution", "distributor", "diving", "division", "divorced", "dock", "doctor", "dog", "dogsled", "doll", "dollar", "dolphin", "domain", "donald", "donkey", "donna", "door", "dorothy", "double", "doubt", "downtown", "dragon", "dragonfly", "drain", "drake", "drama", "draw", "drawbridge", "drawer", "dream", "dredger", "dress", "dresser", "dressing", "drill", "drink", "drive", "driver", "driving", "drizzle", "drop", "drug", "drum", "dry", "dryer", "duck", "duckling", "dugout", "dungeon", "dust", "eagle", "ear", "earth", "earthquake", "ease", "east", "edge", "edger", "editor", "editorial", "education", "edward", "eel", "effect", "egg", "eggnog", "eggplant", "egypt", "eight", "elbow", "element", "elephant", "elizabeth", "ellipse", "emery", "employee", "employer", "encyclopedia", "end", "enemy", "energy", "engine", "engineer", "engineering", "english", "enquiry", "entrance", "environment", "epoch", "epoxy", "equinox", "equipment", "era", "error", "estimate", "ethernet", "ethiopia", "euphonium", "europe", "evening", "event", "ex-husband", "ex-wife", "examination", "example", "exchange", "exclamation", "exhaust", "existence", "expansion", "experience", "expert", "explanation", "eye", "eyebrow", "eyelash", "eyeliner", "face", "facilities", "fact", "factory", "fahrenheit", "fairies", "fall", "family", "fan", "fang", "farm", "farmer", "fat", "father", "father-in-law", "faucet", "fear", "feast", "feather", "feature", "february", "fedelini", "feedback", "feeling", "feet", "felony", "female", "fender", "ferry", "ferryboat", "fertilizer", "fiber", "fiberglass", "fibre", "fiction", "field", "fifth", "fight", "fighter", "file", "find", "fine", "finger", "fir", "fire", "fired", "fireman", "fireplace", "firewall", "fish", "fisherman", "flag", "flame", "flare", "flat", "flavor", "flax", "flesh", "flight", "flock", "flood", "floor", "flower", "flugelhorn", "flute", "fly", "foam", "fog", "fold", "font", "food", "foot", "football", "footnote", "force", "forecast", "forehead", "forest", "forgery", "fork", "form", "format", "fortnight", "foundation", "fountain", "fowl", "fox", "foxglove", "fragrance", "frame", "france", "freckle", "freeze", "freezer", "freighter", "french", "freon", "friction", "friday", "fridge", "friend", "frog", "front", "frost", "frown", "fruit", "fuel", "fur", "furniture", "galley", "gallon", "game", "gander", "garage", "garden", "garlic", "gas", "gasoline", "gate", "gateway", "gauge", "gazelle", "gear", "gearshift", "geese", "gemini", "gender", "geography", "geology", "geometry", "george", "geranium", "german", "germany", "ghana", "ghost", "giant", "giraffe", "girdle", "girl", "gladiolus", "glass", "glider", "gliding", "glockenspiel", "glove", "glue", "goal", "goat", "gold", "goldfish", "golf", "gondola", "gong", "good-bye", "goose", "gore-tex", "gorilla", "gosling", "government", "governor", "grade", "grain", "gram", "granddaughter", "grandfather", "grandmother", "grandson", "grape", "graphic", "grass", "grasshopper", "gray", "grease", "great-grandfather", "great-grandmother", "greece", "greek", "green", "grenade", "grey", "grill", "grip", "ground", "group", "grouse", "growth", "guarantee", "guatemalan", "guide", "guilty", "guitar", "gum", "gun", "gym", "gymnast", "hacksaw", "hail", "hair", "haircut", "half-brother", "half-sister", "halibut", "hall", "hallway", "hamburger", "hammer", "hamster", "hand", "handball", "handicap", "handle", "handsaw", "harbor", "hardboard", "hardcover", "hardhat", "hardware", "harmonica", "harmony", "harp", "hat", "hate", "hawk", "head", "headlight", "headline", "health", "hearing", "heart", "heat", "heaven", "hedge", "height", "helen", "helicopter", "helium", "hell", "helmet", "help", "hemp", "hen", "heron", "herring", "hexagon", "hill", "himalayan", "hip", "hippopotamus", "history", "hobbies", "hockey", "hoe", "hole", "holiday", "home", "honey", "hood", "hook", "hope", "horn", "horse", "hose", "hospital", "hot", "hour", "hourglass", "house", "hovercraft", "hub", "hubcap", "humidity", "humor", "hurricane", "hyacinth", "hydrant", "hydrofoil", "hydrogen", "hyena", "hygienic", "ice", "icebreaker", "icicle", "icon", "idea", "ikebana", "illegal", "imprisonment", "improvement", "impulse", "inch", "income", "increase", "index", "india", "indonesia", "industry", "ink", "innocent", "input", "insect", "instruction", "instrument", "insulation", "insurance", "interactive", "interest", "internet", "interviewer", "intestine", "invention", "inventory", "invoice", "iran", "iraq", "iris", "iron", "island", "israel", "italian", "italy", "jacket", "jaguar", "jail", "jam", "james", "january", "japan", "japanese", "jar", "jasmine", "jason", "jaw", "jeans", "jeep", "jeff", "jelly", "jellyfish", "jennifer", "jet", "jewel", "jogging", "john", "join", "joke", "joseph", "journey", "judge", "judo", "juice", "july", "jumbo", "jump", "jumper", "june", "jury", "justice", "jute", "kale", "kamikaze", "kangaroo", "karate", "karen", "kayak", "kendo", "kenneth", "kenya", "ketchup", "kettle", "kettledrum", "kevin", "key", "keyboard", "keyboarding", "kick", "kidney", "kilogram", "kilometer", "kimberly", "kiss", "kitchen", "kite", "kitten", "kitty", "knee", "knickers", "knife", "knight", "knot", "knowledge", "kohlrabi", "korean", "laborer", "lace", "ladybug", "lake", "lamb", "lamp", "lan", "land", "landmine", "language", "larch", "lasagna", "latency", "latex", "lathe", "laugh", "laundry", "laura", "law", "lawyer", "layer", "lead", "leaf", "learning", "leather", "leek", "leg", "legal", "lemonade", "lentil", "leo", "leopard", "letter", "lettuce", "level", "libra", "library", "license", "lier", "lift", "light", "lightning", "lilac", "lily", "limit", "linda", "line", "linen", "link", "lion", "lip", "lipstick", "liquid", "liquor", "lisa", "list", "literature", "litter", "liver", "lizard", "llama", "loaf", "loan", "lobster", "lock", "locket", "locust", "look", "loss", "lotion", "love", "low", "lumber", "lunch", "lunchroom", "lung", "lunge", "lute", "luttuce", "lycra", "lynx", "lyocell", "lyre", "lyric", "macaroni", "machine", "macrame", "magazine", "magic", "magician", "maid", "mail", "mailbox", "mailman", "makeup", "malaysia", "male", "mall", "mallet", "man", "manager", "mandolin", "manicure", "manx", "map", "maple", "maraca", "marble", "march", "margaret", "margin", "maria", "marimba", "mark", "market", "married", "mary", "mascara", "mask", "mass", "match", "math", "mattock", "may", "mayonnaise", "meal", "measure", "meat", "mechanic", "medicine", "meeting", "melody", "memory", "men", "menu", "mercury", "message", "metal", "meteorology", "meter", "methane", "mexican", "mexico", "mice", "michael", "michelle", "microwave", "middle", "mile", "milk", "milkshake", "millennium", "millimeter", "millisecond", "mimosa", "mind", "mine", "mini-skirt", "minibus", "minister", "mint", "minute", "mirror", "missile", "mist", "mistake", "mitten", "moat", "modem", "mole", "mom", "monday", "money", "monkey", "month", "moon", "morning", "morocco", "mosque", "mosquito", "mother", "mother-in-law", "motion", "motorboat", "motorcycle", "mountain", "mouse", "moustache", "mouth", "move", "multi-hop", "multimedia", "muscle", "museum", "music", "musician", "mustard", "myanmar", "nail", "name", "nancy", "napkin", "narcissus", "nation", "neck", "need", "needle", "neon", "nepal", "nephew", "nerve", "nest", "net", "network", "news", "newsprint", "newsstand", "nic", "nickel", "niece", "nigeria", "night", "nitrogen", "node", "noise", "noodle", "north", "north america", "north korea", "norwegian", "nose", "note", "notebook", "notify", "novel", "november", "number", "numeric", "nurse", "nut", "nylon", "oak", "oatmeal", "objective", "oboe", "observation", "occupation", "ocean", "ocelot", "octagon", "octave", "october", "octopus", "odometer", "offence", "offer", "office", "oil", "okra", "olive", "onion", "open", "opera", "operation", "ophthalmologist", "opinion", "option", "orange", "orchestra", "orchid", "order", "organ", "organisation", "organization", "ornament", "ostrich", "otter", "ounce", "output", "outrigger", "oval", "oven", "overcoat", "owl", "owner", "ox", "oxygen", "oyster", "package", "packet", "page", "pail", "pain", "paint", "pair", "pajama", "pakistan", "palm", "pamphlet", "pan", "pancake", "pancreas", "panda", "pansy", "panther", "panties", "pantry", "pants", "panty", "pantyhose", "paper", "paperback", "parade", "parallelogram", "parcel", "parent", "parentheses", "park", "parrot", "parsnip", "part", "particle", "partner", "partridge", "party", "passbook", "passenger", "passive", "pasta", "paste", "pastor", "pastry", "patch", "path", "patient", "patio", "patricia", "paul", "payment", "pea", "peace", "peak", "peanut", "pear", "pedestrian", "pediatrician", "peen", "peer-to-peer", "pelican", "pen", "penalty", "pencil", "pendulum", "pentagon", "peony", "pepper", "perch", "perfume", "period", "periodical", "peripheral", "permission", "persian", "person", "peru", "pest", "pet", "pharmacist", "pheasant", "philippines", "philosophy", "phone", "physician", "piano", "piccolo", "pickle", "picture", "pie", "pig", "pigeon", "pike", "pillow", "pilot", "pimple", "pin", "pine", "ping", "pink", "pint", "pipe", "pisces", "pizza", "place", "plain", "plane", "planet", "plant", "plantation", "plaster", "plasterboard", "plastic", "plate", "platinum", "play", "playground", "playroom", "pleasure", "plier", "plot", "plough", "plow", "plywood", "pocket", "poet", "point", "poison", "poland", "police", "policeman", "polish", "politician", "pollution", "polo", "polyester", "pond", "popcorn", "poppy", "population", "porch", "porcupine", "port", "porter", "position", "possibility", "postage", "postbox", "pot", "potato", "poultry", "pound", "powder", "power", "precipitation", "preface", "prepared", "pressure", "price", "priest", "print", "printer", "prison", "probation", "process", "processing", "produce", "product", "production", "professor", "profit", "promotion", "propane", "property", "prose", "prosecution", "protest", "protocol", "pruner", "psychiatrist", "psychology", "ptarmigan", "puffin", "pull", "puma", "pump", "pumpkin", "punch", "punishment", "puppy", "purchase", "purple", "purpose", "push", "pvc", "pyjama", "pyramid", "quail", "quality", "quart", "quarter", "quartz", "queen", "question", "quicksand", "quiet", "quill", "quilt", "quince", "quit", "quiver", "quotation", "rabbi", "rabbit", "racing", "radar", "radiator", "radio", "radish", "raft", "rail", "railway", "rain", "rainbow", "raincoat", "rainstorm", "rake", "ramie", "random", "range", "rat", "rate", "raven", "ravioli", "ray", "rayon", "reaction", "reading", "reason", "receipt", "recess", "record", "recorder", "rectangle", "red", "reduction", "refrigerator", "refund", "regret", "reindeer", "relation", "relative", "religion", "relish", "reminder", "repair", "replace", "report", "representative", "request", "resolution", "respect", "responsibility", "rest", "restaurant", "result", "retailer", "revolve", "revolver", "reward", "rhinoceros", "rhythm", "rice", "richard", "riddle", "rifle", "ring", "rise", "risk", "river", "riverbed", "road", "roadway", "roast", "robert", "robin", "rock", "rocket", "rod", "roll", "romania", "romanian", "ronald", "roof", "room", "rooster", "root", "rose", "rotate", "route", "router", "rowboat", "rub", "rubber", "rugby", "rule", "run", "russia", "russian", "rutabaga", "ruth", "sack", "sagittarius", "sail", "sailboat", "sailor", "salad", "salary", "sale", "salesman", "salmon", "salt", "sampan", "samurai", "sand", "sandra", "sandwich", "santa", "sarah", "sardine", "satin", "saturday", "sauce", "saudi arabia", "sausage", "save", "saw", "saxophone", "scale", "scallion", "scanner", "scarecrow", "scarf", "scene", "scent", "schedule", "school", "science", "scissors", "scooter", "scorpio", "scorpion", "scraper", "screen", "screw", "screwdriver", "sea", "seagull", "seal", "seaplane", "search", "seashore", "season", "seat", "second", "secretary", "secure", "security", "seed", "seeder", "segment", "select", "selection", "self", "semicircle", "semicolon", "sense", "sentence", "separated", "september", "servant", "server", "session", "sex", "shade", "shadow", "shake", "shallot", "shame", "shampoo", "shape", "share", "shark", "sharon", "shears", "sheep", "sheet", "shelf", "shell", "shield", "shingle", "ship", "shirt", "shock", "shoe", "shoemaker", "shop", "shorts", "shoulder", "shovel", "show", "shrimp", "shrine", "siamese", "siberian", "side", "sideboard", "sidecar", "sidewalk", "sign", "signature", "silica", "silk", "silver", "sing", "singer", "single", "sink", "sister", "sister-in-law", "size", "skate", "skiing", "skill", "skin", "skirt", "sky", "slash", "slave", "sled", "sleep", "sleet", "slice", "slime", "slip", "slipper", "slope", "smash", "smell", "smile", "smoke", "snail", "snake", "sneeze", "snow", "snowboarding", "snowflake", "snowman", "snowplow", "snowstorm", "soap", "soccer", "society", "sociology", "sock", "soda", "sofa", "softball", "softdrink", "software", "soil", "soldier", "son", "song", "soprano", "sort", "sound", "soup", "sousaphone", "south africa", "south america", "south korea", "soy", "soybean", "space", "spade", "spaghetti", "spain", "spandex", "spark", "sparrow", "spear", "specialist", "speedboat", "sphere", "sphynx", "spider", "spike", "spinach", "spleen", "sponge", "spoon", "spot", "spring", "sprout", "spruce", "spy", "square", "squash", "squid", "squirrel", "stage", "staircase", "stamp", "star", "start", "starter", "state", "statement", "station", "statistic", "steam", "steel", "stem", "step", "step-aunt", "step-brother", "step-daughter", "step-father", "step-grandfather", "step-grandmother", "step-mother", "step-sister", "step-son", "step-uncle", "stepdaughter", "stepmother", "stepson", "steven", "stew", "stick", "stinger", "stitch", "stock", "stocking", "stomach", "stone", "stool", "stop", "stopsign", "stopwatch", "store", "storm", "story", "stove", "stranger", "straw", "stream", "street", "streetcar", "stretch", "string", "structure", "study", "sturgeon", "submarine", "substance", "subway", "success", "sudan", "suede", "sugar", "suggestion", "suit", "summer", "sun", "sunday", "sundial", "sunflower", "sunshine", "supermarket", "supply", "support", "surfboard", "surgeon", "surname", "surprise", "susan", "sushi", "swallow", "swamp", "swan", "sweater", "sweatshirt", "sweatshop", "swedish", "sweets", "swim", "swimming", "swing", "swiss", "switch", "sword", "swordfish", "sycamore", "syria", "syrup", "system", "t-shirt", "table", "tablecloth", "tabletop", "tachometer", "tadpole", "tail", "tailor", "taiwan", "talk", "tank", "tanker", "tanzania", "target", "taste", "taurus", "tax", "taxi", "taxicab", "tea", "teacher", "teaching", "team", "technician", "teeth", "television", "teller", "temper", "temperature", "temple", "tempo", "tendency", "tennis", "tenor", "tent", "territory", "test", "text", "textbook", "texture", "thailand", "theater", "theory", "thermometer", "thing", "thistle", "thomas", "thought", "thread", "thrill", "throat", "throne", "thumb", "thunder", "thunderstorm", "thursday", "ticket", "tie", "tiger", "tights", "tile", "timbale", "time", "timer", "timpani", "tin", "tip", "tire", "titanium", "title", "toad", "toast", "toe", "toenail", "toilet", "tom-tom", "tomato", "ton", "tongue", "tooth", "toothbrush", "toothpaste", "top", "tornado", "tortellini", "tortoise", "touch", "tower", "town", "toy", "tractor", "trade", "traffic", "trail", "train", "tramp", "transaction", "transmission", "transport", "trapezoid", "tray", "treatment", "tree", "trial", "triangle", "trick", "trigonometry", "trip", "trombone", "trouble", "trousers", "trout", "trowel", "truck", "trumpet", "trunk", "tsunami", "tub", "tuba", "tuesday", "tugboat", "tulip", "tuna", "tune", "turkey", "turkish", "turn", "turnip", "turnover", "turret", "turtle", "tv", "twig", "twilight", "twine", "twist", "typhoon", "tyvek", "uganda", "ukraine", "ukrainian", "umbrella", "uncle", "underclothes", "underpants", "undershirt", "underwear", "unit", "united kingdom", "unshielded", "use", "utensil", "uzbekistan", "vacation", "vacuum", "valley", "value", "van", "vase", "vault", "vegetable", "vegetarian", "veil", "vein", "velvet", "venezuela", "venezuelan", "verdict", "vermicelli", "verse", "vessel", "vest", "veterinarian", "vibraphone", "vietnam", "view", "vinyl", "viola", "violet", "violin", "virgo", "viscose", "vise", "vision", "visitor", "voice", "volcano", "volleyball", "voyage", "vulture", "waiter", "waitress", "walk", "wall", "wallaby", "wallet", "walrus", "war", "warm", "wash", "washer", "wasp", "waste", "watch", "watchmaker", "water", "waterfall", "wave", "wax", "way", "wealth", "weapon", "weasel", "weather", "wedge", "wednesday", "weed", "weeder", "week", "weight", "whale", "wheel", "whip", "whiskey", "whistle", "white", "wholesaler", "whorl", "wilderness", "william", "willow", "wind", "windchime", "window", "windscreen", "windshield", "wine", "wing", "winter", "wire", "wish", "witch", "withdrawal", "witness", "wolf", "woman", "women", "wood", "wool", "woolen", "word", "work", "workshop", "worm", "wound", "wrecker", "wren", "wrench", "wrinkle", "wrist", "writer", "xylophone", "yacht", "yak", "yam", "yard", "yarn", "year", "yellow", "yew", "yogurt", "yoke", "yugoslavian", "zebra", "zephyr", "zinc", "zipper", "zone", "zoo", "zoology" ];

let nounArrayPlural = ["accelerators", "accordions", "accounts", "accountants", "acknowledgments", "acoustics", "acrylics", "acts", "actions", "actives", "activity", "actors", "actresses", "adapters", "additions", "addresses", "adjustments", "adults", "advantages", "advertisements", "advices", "afghanistans", "africas", "aftermaths", "afternoons", "aftershaves", "afterthoughts", "ages", "agendas", "agreements", "airs", "airbuss", "airmails", "airplanes", "airports", "airships", "alarms", "albatrosses", "alcohols", "algebras", "algerias", "alibis", "alleys", "alligatorss", "alloyss", "almanacss", "alphabets", "altos", "aluminiums", "aluminums", "ambulances", "americas", "amounts", "amusements", "anatomies", "anethesiologists", "angers", "angles", "angoras", "animals", "animes", "ankles", "answers", "ants", "antarcticas", "anteaters", "antelopes", "anthonies", "anthropologies", "apartments", "apologies", "apparatuss", "apparels", "appeals", "appendixs", "apples", "appliances", "approvals", "aprils", "aquariuss", "arches", "archaeologies", "archeologies", "archers", "architectures", "areas", "argentinas", "arguments", "ariess", "arithmetics", "arms", "armadillos", "armchairs", "armenians", "armies", "arrows", "arts", "ashs", "ashtrays", "asias", "asparaguss", "asphalts", "asterisks", "astronomys", "athletes", "atms", "atoms", "attacks", "attempts", "attentions", "attics", "attractions", "augusts", "aunts", "australias", "australians", "authors", "authorisations", "authorities", "authorizations", "avenues", "babiess", "baboons", "babies", "backs", "backbones", "bacons", "badges", "badgers", "bags", "bagels", "bagpipes", "bails", "baits", "bakers", "bakeries", "balances", "balineses", "balls", "balloons", "bamboos", "bananas", "bands", "bandanas", "bangladeshs", "bangles", "banjos", "banks", "bankbooks", "bankers", "bars", "barbaras", "barbers", "barges", "baritones", "barometers", "bases", "baseballs", "basements", "basins", "baskets", "basketballs", "basses", "bassoons", "bats", "baths", "bathrooms", "bathtubs", "batteries", "battles", "bays", "beaches", "beads", "beams", "beans", "bears", "beards", "beasts", "beats", "beauticians", "beauties", "beavers", "beds", "bedrooms", "bees", "beeches", "beefs", "beers", "beets", "beetles", "beggars", "beginners", "begonias", "behaviors", "belgians", "beliefs", "believes", "bells", "belts", "benches", "bengals", "berets", "berries", "bestsellers", "betties", "bibliographies", "bicycles", "bikes", "bills", "billboards", "biologies", "biplanes", "birches", "birds", "births", "birthdays", "bits", "bites", "blacks", "bladders", "blades", "blankets", "blinkers", "blizzards", "blocks", "bloods", "blouses", "blows", "blowguns", "blues", "boards", "boats", "bobcats", "bodies", "bolts", "bombs", "bombers", "bones", "bongos", "bonsais", "books", "bookcases", "booklets", "boots", "borders", "botanies", "bottles", "bottoms", "boundaries", "bows", "bowls", "bowlings", "boxs", "boys", "bras", "braces", "brackets", "brains", "brakes", "branches", "brands", "brandies", "brasses", "brazils", "breads", "breaks", "breakfasts", "breaths", "brians", "bricks", "bridges", "britishs", "broccolis", "brochures", "brokers", "bronzes", "brothers", "brother-in-laws", "brows", "browns", "brushs", "bubbles", "buckets", "budgets", "buffers", "buffets", "bugles", "buildings", "bulbs", "bulls", "bulldozers", "bumpers", "buns", "burglars", "burmas", "burns", "bursts", "buss", "bushs", "businesses", "butanes", "butchers", "butters", "buttons", "buzzards", "c-clamps", "cabbages", "cabinets", "cables", "cactuss", "cafes", "cakes", "calculators", "calculuss", "calendars", "calfs", "calls", "camels", "cameras", "camps", "cans", "canadas", "canadians", "cancers", "candles", "cannons", "canoes", "canvass", "caps", "capitals", "cappellettis", "capricorns", "captains", "captions", "cars", "caravans", "carbons", "cards", "cardboards", "cardigans", "cares", "carnations", "carols", "carps", "carpenters", "carriages", "carrots", "carts", "cartoons", "cases", "casts", "castanets", "cats", "catamarans", "caterpillars", "cathedrals", "catsups", "cattles", "cauliflowers", "causes", "cautions", "caves", "cds", "ceilings", "celeries", "celestes", "cells", "cellars", "cellos", "celsiuss", "cements", "cemeteries", "cents", "centimeters", "centuries", "ceramics", "cereals", "certifications", "chains", "chairs", "chalks", "chances", "changes", "channels", "characters", "chards", "charless", "chauffeurs", "checks", "cheeks", "cheeses", "cheetahs", "chefs", "chemistries", "cheques", "cherriess", "cherries", "chesses", "chests", "chicks", "chickens", "chicories", "chiefs", "childs", "childrens", "chills", "chimes", "chimpanzees", "chins", "chinas", "chineses", "chives", "chocolates", "chords", "christmass", "christophers", "chronometers", "churches", "cicadas", "cinemas", "circles", "circulations", "cirruss", "citizenships", "cities", "clams", "clarinets", "classes", "clauss", "claves", "clefs", "clerks", "clicks", "clients", "climbs", "clippers", "cloakrooms", "clocks", "closes", "closets", "cloths", "clouds", "cloudies", "clovers", "clubs", "clutches", "coaches", "coals", "coasts", "coats", "cobwebs", "cockroaches", "cocktails", "cocoas", "cods", "coffees", "coils", "coins", "cokes", "colds", "collars", "colleges", "collisions", "colombias", "colons", "colonies", "colors", "colts", "columns", "columnists", "combs", "comforts", "comics", "commas", "commands", "commissions", "committees", "communities", "companies", "comparisons", "competitions", "competitors", "composers", "compositions", "computers", "conditions", "condors", "cones", "confirmations", "congas", "congos", "conifers", "connections", "consonants", "continents", "controls", "cooks", "cookings", "coppers", "copies", "copyrights", "cords", "corks", "cormorants", "corns", "cornets", "correspondents", "costs", "cottons", "couches", "cougars", "coughs", "countries", "courses", "courts", "cousins", "covers", "cows", "cowbells", "crabs", "cracks", "crackers", "craftsmans", "crates", "crawdads", "crayfishs", "crayons", "creams", "creators", "creatures", "credits", "creditors", "creeks", "cribs", "crickets", "crimes", "criminals", "crocodiles", "crocuss", "croissants", "crooks", "crops", "crosses", "crows", "crowds", "crowns", "crushs", "cries", "cubs", "cubans", "cucumbers", "cultivators", "cups", "cupboards", "cupcakes", "curlers", "currencies", "currents", "curtains", "curves", "cushions", "custards", "customers", "cuts", "cuticles", "cycles", "cyclones", "cylinders", "cymbals", "dads", "daffodils", "dahlias", "daisies", "damages", "dances", "dancers", "dangers", "daniels", "dashs", "dashboards", "databases", "dates", "daughters", "davids", "days", "deads", "deadlines", "deals", "deaths", "deborahs", "debts", "debtors", "decades", "decembers", "decimals", "decisions", "decreases", "dedications", "deers", "defenses", "deficits", "degrees", "deletes", "deliveries", "dens", "denims", "dentists", "deodorants", "departments", "deposits", "descriptions", "deserts", "designs", "desires", "desks", "desserts", "destructions", "details", "detectives", "developments", "dews", "diamonds", "diaphragms", "dibbles", "dictionaries", "dieticians", "differences", "digestions", "diggers", "digitals", "dills", "dimes", "dimples", "dinghies", "dinners", "dinosaurs", "diplomas", "dipsticks", "directions", "dirts", "disadvantages", "discoveries", "discussions", "diseases", "disgusts", "dishs", "distances", "distributions", "distributors", "divings", "divisions", "divorceds", "docks", "doctors", "dogs", "dogsleds", "dolls", "dollars", "dolphins", "domains", "donalds", "donkeys", "donnas", "doors", "dorothies", "doubles", "doubts", "downtowns", "dragons", "dragonflies", "drains", "drakes", "dramas", "draws", "drawbridges", "drawers", "dreams", "dredgers", "dresses", "dressers", "dressings", "drills", "drinks", "drives", "drivers", "drivings", "drizzles", "drops", "drugs", "drums", "dries", "dryers", "ducks", "ducklings", "dugouts", "dungeons", "dusts", "eagles", "ears", "earths", "earthquakes", "eases", "easts", "edges", "edgers", "editors", "editorials", "educations", "edwards", "eels", "effects", "eggs", "eggnogs", "eggplants", "egypts", "eights", "elbows", "elements", "elephants", "elizabeths", "ellipses", "emeries", "employees", "employers", "encyclopedias", "ends", "enemies", "energies", "engines", "engineers", "engineerings", "englishs", "enquiries", "entrances", "environments", "epoches", "epoxies", "equinoxs", "equipments", "eras", "errors", "estimates", "ethernets", "ethiopias", "euphoniums", "europes", "evenings", "events", "ex-husbands", "ex-wifes", "examinations", "examples", "exchanges", "exclamations", "exhausts", "existences", "expansions", "experiences", "experts", "explanations", "eyes", "eyebrows", "eyelashs", "eyeliners", "faces", "facilitiess", "facts", "factories", "fahrenheits", "fairiess", "falls", "families", "fans", "fangs", "farms", "farmers", "fats", "fathers", "father-in-laws", "faucets", "fears", "feasts", "feathers", "features", "februaries", "fedelinis", "feedbacks", "feelings", "feets", "felonies", "females", "fenders", "ferries", "ferryboats", "fertilizers", "fibers", "fiberglasses", "fibres", "fictions", "fields", "fifths", "fights", "fighters", "files", "finds", "fines", "fingers", "firs", "fires", "fireds", "firemans", "fireplaces", "firewalls", "fishs", "fishermans", "flags", "flames", "flares", "flats", "flavors", "flaxs", "fleshs", "flights", "flocks", "floods", "floors", "flowers", "flugelhorns", "flutes", "flies", "foams", "fogs", "folds", "fonts", "foods", "foots", "footballs", "footnotes", "forces", "forecasts", "foreheads", "forests", "forgeries", "forks", "forms", "formats", "fortnights", "foundations", "fountains", "fowls", "foxs", "foxgloves", "fragrances", "frames", "frances", "freckles", "freezes", "freezers", "freighters", "frenches", "freons", "frictions", "fridays", "fridges", "friends", "frogs", "fronts", "frosts", "frowns", "fruits", "fuels", "furs", "furnitures", "galleys", "gallons", "games", "ganders", "garages", "gardens", "garlics", "gass", "gasolines", "gates", "gateways", "gauges", "gazelles", "gears", "gearshifts", "geeses", "geminis", "genders", "geographies", "geologies", "geometries", "georges", "geraniums", "germans", "germanies", "ghanas", "ghosts", "giants", "giraffes", "girdles", "girls", "gladioluss", "glasses", "gliders", "glidings", "glockenspiels", "gloves", "glues", "goals", "goats", "golds", "goldfishs", "golfs", "gondolas", "gongs", "good-byes", "gooses", "gore-texs", "gorillas", "goslings", "governments", "governors", "grades", "grains", "grams", "granddaughters", "grandfathers", "grandmothers", "grandsons", "grapes", "graphics", "grasses", "grasshoppers", "grays", "greases", "great-grandfathers", "great-grandmothers", "greeces", "greeks", "greens", "grenades", "greys", "grills", "grips", "grounds", "groups", "grouses", "growths", "guarantees", "guatemalans", "guides", "guilties", "guitars", "gums", "guns", "gyms", "gymnasts", "hacksaws", "hails", "hairs", "haircuts", "half-brothers", "half-sisters", "halibuts", "halls", "hallways", "hamburgers", "hammers", "hamsters", "hands", "handballs", "handicaps", "handles", "handsaws", "harbors", "hardboards", "hardcovers", "hardhats", "hardwares", "harmonicas", "harmonies", "harps", "hats", "hates", "hawks", "heads", "headlights", "headlines", "healths", "hearings", "hearts", "heats", "heavens", "hedges", "heights", "helens", "helicopters", "heliums", "hells", "helmets", "helps", "hemps", "hens", "herons", "herrings", "hexagons", "hills", "himalayans", "hips", "hippopotamuss", "histories", "hobbiess", "hockeys", "hoes", "holes", "holidays", "homes", "honeys", "hoods", "hooks", "hopes", "horns", "horses", "hoses", "hospitals", "hots", "hours", "hourglasses", "houses", "hovercrafts", "hubs", "hubcaps", "humidities", "humors", "hurricanes", "hyacinths", "hydrants", "hydrofoils", "hydrogens", "hyenas", "hygienics", "ices", "icebreakers", "icicles", "icons", "ideas", "ikebanas", "illegals", "imprisonments", "improvements", "impulses", "inches", "incomes", "increases", "indexs", "indias", "indonesias", "industries", "inks", "innocents", "inputs", "insects", "instructions", "instruments", "insulations", "insurances", "interactives", "interests", "internets", "interviewers", "intestines", "inventions", "inventories", "invoices", "irans", "iraqs", "iriss", "irons", "islands", "israels", "italians", "italies", "jackets", "jaguars", "jails", "jams", "jamess", "januaries", "japans", "japaneses", "jars", "jasmines", "jasons", "jaws", "jeanss", "jeeps", "jeffs", "jellies", "jellyfishs", "jennifers", "jets", "jewels", "joggings", "johns", "joins", "jokes", "josephs", "journeys", "judges", "judos", "juices", "julies", "jumbos", "jumps", "jumpers", "junes", "juries", "justices", "jutes", "kales", "kamikazes", "kangaroos", "karates", "karens", "kayaks", "kendos", "kenneths", "kenyas", "ketchups", "kettles", "kettledrums", "kevins", "keys", "keyboards", "keyboardings", "kicks", "kidneys", "kilograms", "kilometers", "kimberlies", "kisses", "kitchens", "kites", "kittens", "kitties", "knees", "knickerss", "knifes", "knights", "knots", "knowledges", "kohlrabis", "koreans", "laborers", "laces", "ladybugs", "lakes", "lambs", "lamps", "lans", "lands", "landmines", "languages", "larches", "lasagnas", "latencys", "latexs", "lathes", "laughs", "laundries", "lauras", "laws", "lawyers", "layers", "leads", "leafs", "learnings", "leathers", "leeks", "legs", "legals", "lemonades", "lentils", "leos", "leopards", "letters", "lettuces", "levels", "libras", "libraries", "licenses", "liers", "lifts", "lights", "lightnings", "lilacs", "lilies", "limits", "lindas", "lines", "linens", "links", "lions", "lips", "lipsticks", "liquids", "liquors", "lisas", "lists", "literatures", "litters", "livers", "lizards", "llamas", "loafs", "loans", "lobsters", "locks", "lockets", "locusts", "looks", "losses", "lotions", "loves", "lows", "lumbers", "lunches", "lunchrooms", "lungs", "lunges", "lutes", "luttuces", "lycras", "lynxs", "lyocells", "lyres", "lyrics", "macaronis", "machines", "macrames", "magazines", "magics", "magicians", "maids", "mails", "mailboxs", "mailmans", "makeups", "malaysias", "males", "malls", "mallets", "mans", "managers", "mandolins", "manicures", "manxs", "maps", "maples", "maracas", "marbles", "marches", "margarets", "margins", "marias", "marimbas", "marks", "markets", "marrieds", "maries", "mascaras", "masks", "masses", "matches", "maths", "mattocks", "mays", "mayonnaises", "meals", "measures", "meats", "mechanics", "medicines", "meetings", "melodies", "memories", "mens", "menus", "mercuries", "messages", "metals", "meteorologies", "meters", "methanes", "mexicans", "mexicos", "mices", "michaels", "michelles", "microwaves", "middles", "miles", "milks", "milkshakes", "millenniums", "millimeters", "milliseconds", "mimosas", "minds", "mines", "mini-skirts", "minibuss", "ministers", "mints", "minutes", "mirrors", "missiles", "mists", "mistakes", "mittens", "moats", "modems", "moles", "moms", "mondays", "moneys", "monkeys", "months", "moons", "mornings", "moroccos", "mosques", "mosquitos", "mothers", "mother-in-laws", "motions", "motorboats", "motorcycles", "mountains", "mouses", "moustaches", "mouths", "moves", "multi-hops", "multimedias", "muscles", "museums", "musics", "musicians", "mustards", "myanmars", "nails", "names", "nancys", "napkins", "narcissuss", "nations", "necks", "needs", "needles", "neons", "nepals", "nephews", "nerves", "nests", "nets", "networks", "newss", "newsprints", "newsstands", "nics", "nickels", "nieces", "nigerias", "nights", "nitrogens", "nodes", "noises", "noodles", "norths", "north americas", "north koreas", "norwegians", "noses", "notes", "notebooks", "notifies", "novels", "novembers", "numbers", "numerics", "nurses", "nuts", "nylons", "oaks", "oatmeals", "objectives", "oboes", "observations", "occupations", "oceans", "ocelots", "octagons", "octaves", "octobers", "octopuss", "odometers", "offences", "offers", "offices", "oils", "okras", "olives", "onions", "opens", "operas", "operations", "ophthalmologists", "opinions", "options", "oranges", "orchestras", "orchids", "orders", "organs", "organisations", "organizations", "ornaments", "ostriches", "otters", "ounces", "outputs", "outriggers", "ovals", "ovens", "overcoats", "owls", "owners", "oxs", "oxygens", "oysters", "packages", "packets", "pages", "pails", "pains", "paints", "pairs", "pajamas", "pakistans", "palms", "pamphlets", "pans", "pancakes", "pancreass", "pandas", "pansies", "panthers", "pantiess", "pantries", "pantss", "panties", "pantyhoses", "papers", "paperbacks", "parades", "parallelograms", "parcels", "parents", "parenthesess", "parks", "parrots", "parsnips", "parts", "particles", "partners", "partridges", "parties", "passbooks", "passengers", "passives", "pastas", "pastes", "pastors", "pastries", "patches", "paths", "patients", "patios", "patricias", "pauls", "payments", "peas", "peaces", "peaks", "peanuts", "pears", "pedestrians", "pediatricians", "peens", "peer-to-peers", "pelicans", "pens", "penalties", "pencils", "pendulums", "pentagons", "peonies", "peppers", "perches", "perfumes", "periods", "periodicals", "peripherals", "permissions", "persians", "persons", "perus", "pests", "pets", "pharmacists", "pheasants", "philippiness", "philosophys", "phones", "physicians", "pianos", "piccolos", "pickles", "pictures", "pies", "pigs", "pigeons", "pikes", "pillows", "pilots", "pimples", "pins", "pines", "pings", "pinks", "pints", "pipes", "piscess", "pizzas", "places", "plains", "planes", "planets", "plants", "plantations", "plasters", "plasterboards", "plastics", "plates", "platinums", "plays", "playgrounds", "playrooms", "pleasures", "pliers", "plots", "ploughs", "plows", "plywoods", "pockets", "poets", "points", "poisons", "polands", "polices", "policemans", "polishs", "politicians", "pollutions", "polos", "polyesters", "ponds", "popcorns", "poppies", "populations", "porches", "porcupines", "ports", "porters", "positions", "possibilities", "postages", "postboxs", "pots", "potatos", "poultries", "pounds", "powders", "powers", "precipitations", "prefaces", "prepareds", "pressures", "prices", "priests", "prints", "printers", "prisons", "probations", "processes", "processings", "produces", "products", "productions", "professors", "profits", "promotions", "propanes", "properties", "proses", "prosecutions", "protests", "protocols", "pruners", "psychiatrists", "psychologies", "ptarmigans", "puffins", "pulls", "pumas", "pumps", "pumpkins", "punches", "punishments", "puppies", "purchases", "purples", "purposes", "pushs", "pvcs", "pyjamas", "pyramids", "quails", "qualities", "quarts", "quarters", "quartzs", "queens", "questions", "quicksands", "quiets", "quills", "quilts", "quinces", "quits", "quivers", "quotations", "rabbis", "rabbits", "racings", "radars", "radiators", "radios", "radishs", "rafts", "rails", "railways", "rains", "rainbows", "raincoats", "rainstorms", "rakes", "ramies", "randoms", "ranges", "rats", "rates", "ravens", "raviolis", "rays", "rayons", "reactions", "readings", "reasons", "receipts", "recesses", "records", "recorders", "rectangles", "reds", "reductions", "refrigerators", "refunds", "regrets", "reindeers", "relations", "relatives", "religions", "relishs", "reminders", "repairs", "replaces", "reports", "representatives", "requests", "resolutions", "respects", "responsibilities", "rests", "restaurants", "results", "retailers", "revolves", "revolvers", "rewards", "rhinoceross", "rhythms", "rices", "richards", "riddles", "rifles", "rings", "rises", "risks", "rivers", "riverbeds", "roads", "roadways", "roasts", "roberts", "robins", "rocks", "rockets", "rods", "rolls", "romanias", "romanians", "ronalds", "roofs", "rooms", "roosters", "roots", "roses", "rotates", "routes", "routers", "rowboats", "rubs", "rubbers", "rugbies", "rules", "runs", "russias", "russians", "rutabagas", "ruths", "sacks", "sagittariuss", "sails", "sailboats", "sailors", "salads", "salaries", "sales", "salesmans", "salmons", "salts", "sampans", "samurais", "sands", "sandras", "sandwiches", "santas", "sarahs", "sardines", "satins", "saturdays", "sauces", "saudi arabias", "sausages", "saves", "saws", "saxophones", "scales", "scallions", "scanners", "scarecrows", "scarfs", "scenes", "scents", "schedules", "schools", "sciences", "scissorss", "scooters", "scorpios", "scorpions", "scrapers", "screens", "screws", "screwdrivers", "seas", "seagulls", "seals", "seaplanes", "searches", "seashores", "seasons", "seats", "seconds", "secretaries", "secures", "securities", "seeds", "seeders", "segments", "selects", "selections", "selfs", "semicircles", "semicolons", "senses", "sentences", "separateds", "septembers", "servants", "servers", "sessions", "sexs", "shades", "shadows", "shakes", "shallots", "shames", "shampoos", "shapes", "shares", "sharks", "sharons", "shearss", "sheeps", "sheets", "shelfs", "shells", "shields", "shingles", "ships", "shirts", "shocks", "shoes", "shoemakers", "shops", "shortss", "shoulders", "shovels", "shows", "shrimps", "shrines", "siameses", "siberians", "sides", "sideboards", "sidecars", "sidewalks", "signs", "signatures", "silicas", "silks", "silvers", "sings", "singers", "singles", "sinks", "sisters", "sister-in-laws", "sizes", "skates", "skiings", "skills", "skins", "skirts", "skies", "slashs", "slaves", "sleds", "sleeps", "sleets", "slices", "slimes", "slips", "slippers", "slopes", "smashs", "smells", "smiles", "smokes", "snails", "snakes", "sneezes", "snows", "snowboardings", "snowflakes", "snowmans", "snowplows", "snowstorms", "soaps", "soccers", "societies", "sociologies", "socks", "sodas", "sofas", "softballs", "softdrinks", "softwares", "soils", "soldiers", "sons", "songs", "sopranos", "sorts", "sounds", "soups", "sousaphones", "south africas", "south americas", "south koreas", "soys", "soybeans", "spaces", "spades", "spaghettis", "spains", "spandexs", "sparks", "sparrows", "spears", "specialists", "speedboats", "spheres", "sphynxs", "spiders", "spikes", "spinaches", "spleens", "sponges", "spoons", "spots", "springs", "sprouts", "spruces", "spies", "squares", "squashs", "squids", "squirrels", "stages", "staircases", "stamps", "stars", "starts", "starters", "states", "statements", "stations", "statistics", "steams", "steels", "stems", "steps", "step-aunts", "step-brothers", "step-daughters", "step-fathers", "step-grandfathers", "step-grandmothers", "step-mothers", "step-sisters", "step-sons", "step-uncles", "stepdaughters", "stepmothers", "stepsons", "stevens", "stews", "sticks", "stingers", "stitches", "stocks", "stockings", "stomaches", "stones", "stools", "stops", "stopsigns", "stopwatches", "stores", "storms", "stories", "stoves", "strangers", "straws", "streams", "streets", "streetcars", "stretches", "strings", "structures", "studies", "sturgeons", "submarines", "substances", "subways", "successes", "sudans", "suedes", "sugars", "suggestions", "suits", "summers", "suns", "sundays", "sundials", "sunflowers", "sunshines", "supermarkets", "supplies", "supports", "surfboards", "surgeons", "surnames", "surprises", "susans", "sushis", "swallows", "swamps", "swans", "sweaters", "sweatshirts", "sweatshops", "swedishs", "sweetss", "swims", "swimmings", "swings", "swisses", "switches", "swords", "swordfishs", "sycamores", "syrias", "syrups", "systems", "t-shirts", "tables", "tablecloths", "tabletops", "tachometers", "tadpoles", "tails", "tailors", "taiwans", "talks", "tanks", "tankers", "tanzanias", "targets", "tastes", "tauruss", "taxs", "taxis", "taxicabs", "teas", "teachers", "teachings", "teams", "technicians", "teeths", "televisions", "tellers", "tempers", "temperatures", "temples", "tempos", "tendencys", "tenniss", "tenors", "tents", "territories", "tests", "texts", "textbooks", "textures", "thailands", "theaters", "theories", "thermometers", "things", "thistles", "thomass", "thoughts", "threads", "thrills", "throats", "thrones", "thumbs", "thunders", "thunderstorms", "thursdays", "tickets", "ties", "tigers", "tightss", "tiles", "timbales", "times", "timers", "timpanis", "tins", "tips", "tires", "titaniums", "titles", "toads", "toasts", "toes", "toenails", "toilets", "tom-toms", "tomatos", "tons", "tongues", "tooths", "toothbrushs", "toothpastes", "tops", "tornados", "tortellinis", "tortoises", "touches", "towers", "towns", "toys", "tractors", "trades", "traffics", "trails", "trains", "tramps", "transactions", "transmissions", "transports", "trapezoids", "trays", "treatments", "trees", "trials", "triangles", "tricks", "trigonometries", "trips", "trombones", "troubles", "trouserss", "trouts", "trowels", "trucks", "trumpets", "trunks", "tsunamis", "tubs", "tubas", "tuesdays", "tugboats", "tulips", "tunas", "tunes", "turkeys", "turkishs", "turns", "turnips", "turnovers", "turrets", "turtles", "tvs", "twigs", "twilights", "twines", "twists", "typhoons", "tyveks", "ugandas", "ukraines", "ukrainians", "umbrellas", "uncles", "underclothess", "underpantss", "undershirts", "underwears", "units", "united kingdoms", "unshieldeds", "uses", "utensils", "uzbekistans", "vacations", "vacuums", "valleys", "values", "vans", "var verbs = [aardvarks", "vases", "vaults", "vegetables", "vegetarians", "veils", "veins", "velvets", "venezuelas", "venezuelans", "verdicts", "vermicellis", "verses", "vessels", "vests", "veterinarians", "vibraphones", "vietnams", "views", "vinyls", "violas", "violets", "violins", "virgos", "viscoses", "vises", "visions", "visitors", "voices", "volcanos", "volleyballs", "voyages", "vultures", "waiters", "waitresses", "walks", "walls", "wallabies", "wallets", "walruss", "wars", "warms", "washs", "washers", "wasps", "wastes", "watches", "watchmakers", "waters", "waterfalls", "waves", "waxs", "ways", "wealths", "weapons", "weasels", "weathers", "wedges", "wednesdays", "weeds", "weeders", "weeks", "weights", "whales", "wheels", "whips", "whiskeys", "whistles", "whites", "wholesalers", "whorls", "wildernesses", "williams", "willows", "winds", "windchimes", "windows", "windscreens", "windshields", "wines", "wings", "winters", "wires", "wishs", "witches", "withdrawals", "witnesses", "wolfs", "womans", "womens", "woods", "wools", "woolens", "words", "works", "workshops", "worms", "wounds", "wreckers", "wrens", "wrenches", "wrinkles", "wrists", "writers", "xylophones", "yachts", "yaks", "yams", "yards", "yarns", "years", "yellows", "yews", "yogurts", "yokes", "yugoslavians", "zebras", "zephyrs", "zincs", "zippers", "zones", "zoos", "zoology" ];

let verbArray = ["accept", "add", "admire", "admit", "advise", "afford", "agree", "alert", "allow", "amuse", "analyse", "announce", "annoy", "answer", "apologise", "appear", "applaud", "appreciate", "approve", "argue", "arrange", "arrest", "arrive", "ask", "attach", "attack", "attempt", "attend", "attract", "avoid", "back", "bake", "balance", "ban", "bang", "bare", "bat", "bathe", "battle", "beam", "beg", "behave", "belong", "bleach", "bless", "blind", "blink", "blot", "blush", "boast", "boil", "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brake", "branch", "breathe", "bruise", "brush", "bubble", "bump", "burn", "bury", "buzz", "calculate", "call", "camp", "care", "carry", "carve", "cause", "challenge", "change", "charge", "chase", "cheat", "check", "cheer", "chew", "choke", "chop", "claim", "clap", "clean", "clear", "clip", "close", "coach", "coil", "collect", "colour", "comb", "command", "communicate", "compare", "compete", "complain", "complete", "concentrate", "concern", "confess", "confuse", "connect", "consider", "consist", "contain", "continue", "copy", "correct", "cough", "count", "cover", "crack", "crash", "crawl", "cross", "crush", "cry", "cure", "curl", "curve", "cycle", "dam", "damage", "dance", "dare", "decay", "deceive", "decide", "decorate", "delay", "delight", "deliver", "depend", "describe", "desert", "deserve", "destroy", "detect", "develop", "disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "divide", "double", "doubt", "drag", "drain", "dream", "dress", "drip", "drop", "drown", "drum", "dry", "dust", "earn", "educate", "embarrass", "employ", "empty", "encourage", "end", "enjoy", "enter", "entertain", "escape", "examine", "excite", "excuse", "exercise", "exist", "expand", "expect", "explain", "explode", "extend", "face", "fade", "fail", "fancy", "fasten", "fax", "fear", "fence", "fetch", "file", "fill", "film", "fire", "fit", "fix", "flap", "flash", "float", "flood", "flow", "flower", "fold", "follow", "fool", "force", "form", "found", "frame", "frighten", "fry", "gather", "gaze", "glow", "glue", "grab", "grate", "grease", "greet", "grin", "grip", "groan", "guarantee", "guard", "guess", "guide", "hammer", "hand", "handle", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", "heap", "heat", "help", "hook", "hop", "hope", "hover", "hug", "hum", "hunt", "hurry", "identify", "ignore", "imagine", "impress", "improve", "include", "increase", "influence", "inform", "inject", "injure", "instruct", "intend", "interest", "interfere", "interrupt", "introduce", "invent", "invite", "irritate", "itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "label", "land", "last", "laugh", "launch", "learn", "level", "license", "lick", "lie", "lighten", "like", "list", "listen", "live", "load", "lock", "long", "look", "love", "man", "manage", "march", "mark", "marry", "match", "mate", "matter", "measure", "meddle", "melt", "memorise", "mend", "mess up", "milk", "mine", "miss", "mix", "moan", "moor", "mourn", "move", "muddle", "mug", "multiply", "murder", "nail", "name", "need", "nest", "nod", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "open", "order", "overflow", "owe", "own", "pack", "paddle", "paint", "park", "part", "pass", "paste", "pat", "pause", "peck", "pedal", "peel", "peep", "perform", "permit", "phone", "pick", "pinch", "pine", "place", "plan", "plant", "play", "please", "plug", "point", "poke", "polish", "pop", "possess", "post", "pour", "practise", "pray", "preach", "precede", "prefer", "prepare", "present", "preserve", "press", "pretend", "prevent", "prick", "print", "produce", "program", "promise", "protect", "provide", "pull", "pump", "punch", "puncture", "punish", "push", "question", "queue", "race", "radiate", "rain", "raise", "reach", "realise", "receive", "recognise", "record", "reduce", "reflect", "refuse", "regret", "reign", "reject", "rejoice", "relax", "release", "rely", "remain", "remember", "remind", "remove", "repair", "repeat", "replace", "reply", "report", "reproduce", "request", "rescue", "retire", "return", "rhyme", "rinse", "risk", "rob", "rock", "roll", "rot", "rub", "ruin", "rule", "rush", "sack", "sail", "satisfy", "save", "saw", "scare", "scatter", "scold", "scorch", "scrape", "scratch", "scream", "screw", "scribble", "scrub", "seal", "search", "separate", "serve", "settle", "shade", "share", "shave", "shelter", "shiver", "shock", "shop", "shrug", "sigh", "sign", "signal", "sin", "sip", "ski", "skip", "slap", "slip", "slow", "smash", "smell", "smile", "smoke", "snatch", "sneeze", "sniff", "snore", "snow", "soak", "soothe", "sound", "spare", "spark", "sparkle", "spell", "spill", "spoil", "spot", "spray", "sprout", "squash", "squeak", "squeal", "squeeze", "stain", "stamp", "stare", "start", "stay", "steer", "step", "stir", "stitch", "stop", "store", "strap", "strengthen", "stretch", "strip", "stroke", "stuff", "subtract", "succeed", "suck", "suffer", "suggest", "suit", "supply", "support", "suppose", "surprise", "surround", "suspect", "suspend", "switch", "talk", "tame", "tap", "taste", "tease", "telephone", "tempt", "terrify", "test", "thank", "thaw", "tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", "train", "transport", "trap", "travel", "treat", "tremble", "trick", "trip", "trot", "trouble", "trust", "try", "tug", "tumble", "turn", "twist", "type", "undress", "unfasten", "unite", "unlock", "unpack", "untidy", "use", "vanish", "visit", "wail", "wait", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "weigh", "welcome", "whine", "whip", "whirl", "whisper", "whistle", "wink", "wipe", "wish", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", "wriggle", "x-ray", "yawn", "yell", "zip", "zoom"];

let verbPastArray = ["accepted", "added", "admired", "admited", "advised", "afforded", "agreed", "alerted", "allowed", "amused", "analysed", "announced", "annoied", "answered", "apologised", "appeared", "applauded", "appreciated", "approved", "argued", "arranged", "arrested", "arrived", "asked", "attached", "attacked", "attempted", "attended", "attracted", "avoided", "backed", "baked", "balanced", "baned", "banged", "bared", "bated", "bathed", "battled", "beamed", "beged", "behaved", "belonged", "bleached", "blessed", "blinded", "blinked", "bloted", "blushed", "boasted", "boiled", "bolted", "bombed", "booked", "bored", "borrowed", "bounced", "bowed", "boxed", "braked", "branched", "breathed", "bruised", "brushed", "bubbled", "bumped", "burned", "buried", "buzzed", "calculated", "called", "camped", "cared", "carried", "carved", "caused", "challenged", "changed", "charged", "chased", "cheated", "checked", "cheered", "chewed", "choked", "choped", "claimed", "claped", "cleaned", "cleared", "cliped", "closed", "coached", "coiled", "collected", "coloured", "combed", "commanded", "communicated", "compared", "competed", "complained", "completed", "concentrated", "concerned", "confessed", "confused", "connected", "considered", "consisted", "contained", "continued", "copied", "corrected", "coughed", "counted", "covered", "cracked", "crashed", "crawled", "crossed", "crushed", "cried", "cured", "curled", "curved", "cycled", "damed", "damaged", "danced", "dared", "decaied", "deceived", "decided", "decorated", "delaied", "delighted", "delivered", "depended", "described", "deserted", "deserved", "destroied", "detected", "developed", "disagreed", "disappeared", "disapproved", "disarmed", "discovered", "disliked", "divided", "doubled", "doubted", "draged", "drained", "dreamed", "dressed", "driped", "dropped", "drowned", "drumed", "dried", "dusted", "earned", "educated", "embarrassed", "emploied", "emptied", "encouraged", "ended", "enjoied", "entered", "entertained", "escaped", "examined", "excited", "excused", "exercised", "existed", "expanded", "expected", "explained", "exploded", "extended", "faced", "faded", "failed", "fancied", "fastened", "faxed", "feared", "fenced", "fetched", "filed", "filled", "filmed", "fired", "fited", "fixed", "flapped", "flashed", "floated", "flooded", "flowed", "flowered", "folded", "followed", "fooled", "forced", "formed", "founded", "framed", "frightened", "fried", "gathered", "gazed", "glowed", "glued", "grabed", "grated", "greased", "greeted", "grined", "griped", "groaned", "guaranteed", "guarded", "guessed", "guided", "hammered", "handed", "handled", "hanged", "happened", "harassed", "harmed", "hated", "haunted", "headed", "healed", "heaped", "heated", "helped", "hooked", "hoped", "hoped", "hovered", "huged", "humed", "hunted", "hurried", "identified", "ignored", "imagined", "impressed", "improved", "included", "increased", "influenced", "informed", "injected", "injured", "instructed", "intended", "interested", "interfered", "interrupted", "introduced", "invented", "invited", "irritated", "itched", "jailed", "jamed", "joged", "joined", "joked", "judged", "juggled", "jumped", "kicked", "killed", "kissed", "kneeled", "knited", "knocked", "knoted", "labeled", "landed", "lasted", "laughed", "launched", "learned", "leveled", "licensed", "licked", "lied", "lightened", "liked", "listed", "listened", "lived", "loaded", "locked", "longed", "looked", "loved", "maned", "managed", "marched", "marked", "married", "matched", "mated", "mattered", "measured", "meddled", "melted", "memorised", "mended", "mess uped", "milked", "mined", "missed", "mixed", "moaned", "moored", "mourned", "moved", "muddled", "muged", "multiplied", "murdered", "nailed", "named", "needed", "nested", "noded", "noted", "noticed", "numbered", "obeied", "objected", "observed", "obtained", "occured", "offended", "offered", "opened", "ordered", "overflowed", "owed", "owned", "packed", "paddled", "painted", "parked", "parted", "passed", "pasted", "pated", "paused", "pecked", "pedaled", "peeled", "peeped", "performed", "permited", "phoned", "picked", "pinched", "pined", "placed", "planed", "planted", "plaied", "pleased", "pluged", "pointed", "poked", "polished", "poped", "possessed", "posted", "poured", "practised", "praied", "preached", "preceded", "prefered", "prepared", "presented", "preserved", "pressed", "pretended", "prevented", "pricked", "printed", "produced", "programed", "promised", "protected", "provided", "pulled", "pumped", "punched", "punctured", "punished", "pushed", "questioned", "queued", "raced", "radiated", "rained", "raised", "reached", "realised", "received", "recognised", "recorded", "reduced", "reflected", "refused", "regreted", "reigned", "rejected", "rejoiced", "relaxed", "released", "relied", "remained", "remembered", "reminded", "removed", "repaired", "repeated", "replaced", "replied", "reported", "reproduced", "requested", "rescued", "retired", "returned", "rhymed", "rinsed", "risked", "robed", "rocked", "rolled", "roted", "rubed", "ruined", "ruled", "rushed", "sacked", "sailed", "satisfied", "saved", "sawed", "scared", "scattered", "scolded", "scorched", "scraped", "scratched", "screamed", "screwed", "scribbled", "scrubed", "sealed", "searched", "separated", "served", "settled", "shaded", "shared", "shaved", "sheltered", "shivered", "shocked", "shoped", "shruged", "sighed", "signed", "signaled", "sined", "siped", "skied", "skiped", "slaped", "sliped", "slowed", "smashed", "smelled", "smiled", "smoked", "snatched", "sneezed", "sniffed", "snored", "snowed", "soaked", "soothed", "sounded", "spared", "sparked", "sparkled", "spelled", "spilled", "spoiled", "spoted", "spraied", "sprouted", "squashed", "squeaked", "squealed", "squeezed", "stained", "stamped", "stared", "started", "staied", "steered", "steped", "stired", "stitched", "stoped", "stored", "straped", "strengthened", "stretched", "striped", "stroked", "stuffed", "subtracted", "succeeded", "sucked", "suffered", "suggested", "suited", "supplied", "supported", "supposed", "surprised", "surrounded", "suspected", "suspended", "switched", "talked", "tamed", "taped", "tasted", "teased", "telephoned", "tempted", "terrified", "tested", "thanked", "thawed", "ticked", "tickled", "tied", "timed", "tiped", "tired", "touched", "toured", "towed", "traced", "traded", "trained", "transported", "traped", "traveled", "treated", "trembled", "tricked", "triped", "troted", "troubled", "trusted", "tried", "tugged", "tumbled", "turned", "twisted", "typed", "undressed", "unfastened", "united", "unlocked", "unpacked", "untidied", "used", "vanished", "visited", "wailed", "waited", "walked", "wandered", "wanted", "warmed", "warned", "washed", "wasted", "watched", "watered", "waved", "weighed", "welcomed", "whined", "whiped", "whirled", "whispered", "whistled", "winked", "wiped", "wished", "wobbled", "wondered", "worked", "worried", "wraped", "wrecked", "wrestled", "wriggled", "x-rayed", "yawned", "yelled", "ziped", "zoomed"];



/* CHANGES LANGUAGE NAME---------------------*/

let changeNameButton = document.getElementById("change-name");
changeNameButton.addEventListener("click", nameChanger);
let changeName = document.getElementById("changeName");
let newSpan = document.getElementsByClassName("language-name");
function nameChanger() {
    for (i = 0; i < newSpan.length; i++) {
        if (newSpan[i].innerHTML != changeName.value) {
            newSpan[i].innerHTML = changeName.value;
        }
    }
}

/* CHANGES LANGUAGE NAME^^^^^---------------------*/




let submitButton = document.getElementById("submitWords");
let clearButton = document.getElementById("clear-inputNoun");

submitButton.addEventListener("click", createArrays);
clearButton.addEventListener("click", clearOutput);

function clearOutput() { //clears previous results upon clicking "Clear Output"
    outputSectionNoun.replaceChildren();
    document.getElementById("inputRootNoun").value = "";
    document.getElementById("inputMeaningNoun").value = "";
    document.getElementById("inputRootAdj").value = "";
    document.getElementById("inputMeaningAdj").value = "";
}

/*------------SOUND CHANGES------------------------------------------------------*/

function soundChange(word) {

    let vowels = ["a", "ā", "e", "ē", "o", "ō", "u", "ū", "i", "ī", "ə"];
    let longVowels = ["ā", "ē", "ō", "ū", "ī", "ə"];

    let consonants = ["m", "n", "p", "b", "t", "d", "k", "g", "f", "v", "s", "z", "h", "l", "r", "j", "w"];

    letterArray = Array.from(word); /*turns string into an array of individual letters*/

    /*---------SYNCOPE-----------*/
    //removes the fourth letter of words longer than four letters, and lengthens the first vowel, or if the third and fourth letters are the same, removes the fifth letter abd lengthens the fourth letter
    if (letterArray.length > 4) {
        if (letterArray[2] == letterArray[4]) { //check's if the third and fourth letter are the same
            letterArray.splice([5], 1); // 2nd parameter means remove one item only
            if (letterArray[3] == "o") {
                letterArray[3] = "ō"
            } else if (letterArray[3] == "u") {
                letterArray[3] = "ū"
            } else if (letterArray[3] == "i") {
                letterArray[3] = "ī"
            } else if (letterArray[3] == "e") {
                letterArray[3] = "ē"
            } else if (letterArray[3] == "a") {
                letterArray[3] = "ā"
            }
        } else {
            letterArray.splice([3], 1);
            if (letterArray[1] == "o") {
                letterArray[1] = "ō"
            } else if (letterArray[1] == "u") {
                letterArray[1] = "ū"
            } else if (letterArray[1] == "i") {
                letterArray[1] = "ī"
            } else if (letterArray[1] == "e") {
                letterArray[1] = "ē"
            } else if (letterArray[1] == "a") {
                letterArray[1] = "ā"
            }
        }
    }

    let syncopedString = letterArray.join(""); //turns the array back into a string

    let lenitionString0 = syncopedString.replace("pb", "fp");
    let lenitionString1 = lenitionString0.replace("bp", "fp");
    let lenitionString2 = lenitionString1.replace("gk", "hk");
    let lenitionString3 = lenitionString2.replace("kg", "hk");
    let lenitionString4 = lenitionString3.replace("dt", "st");
    let lenitionString5 = lenitionString4.replace("td", "st");
    let lenitionString6 = lenitionString5.replace("bm", "mb");
    let lenitionString7 = lenitionString6.replace("mt", "md");
    let lenitionString8 = lenitionString7.replace("mp", "mb");
    let lenitionString9 = lenitionString8.replace("mk", "mg");

    let furtherChanges = Array.from(lenitionString9);

    let rejoinedString = furtherChanges.join(""); //turns the array back into a string

    //removes "h" if it occurs both after another consonant and before "k". Due to interference with the "h" in the accusative prefix, I had to make this rather clunky workaround. This turns "hk" clusters into "X" (all cases of post-consonantal "h" occur befor "h") and then check if "X" if after a consonant, if it is, then "X" becomes "k", else, it becomes "hk" again
    let hKtoX = rejoinedString.replace("hk", "X");
    let beforeX = consonants.includes(hKtoX.charAt(hKtoX.indexOf("X") - 1));
    let removeCX = hKtoX.includes("X") && beforeX ? hKtoX.replace("X", "k") : hKtoX;
    let returnXtoHK = removeCX.replace("X", "hk");
    
    //checks if "r" is before and after a consonant, and turns it into schwa if so
    let syllabliseR = returnXtoHK.includes("r") && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") + 1)) && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") - 1)) ? returnXtoHK.replace("r", "ə") : returnXtoHK;

    //checks if "l" is before and after a consonant, and turns it into schwa if so
    let syllabliseL = syllabliseR.includes("l") && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") + 1)) && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") - 1)) ? syllabliseR.replace("l", "ə") : syllabliseR;

    
    //turns geminates into singletons
    let reduceGeminate = syllabliseL.replace("pp", "p");
    let reduceGeminate1 = reduceGeminate.replace("bb", "b");
    let reduceGeminate2 = reduceGeminate1.replace("tt", "t");
    let reduceGeminate3 = reduceGeminate2.replace("dd", "d");
    let reduceGeminate4 = reduceGeminate3.replace("kk", "k");
    let reduceGeminate5 = reduceGeminate4.replace("gg", "g");
    let reduceGeminate6 = reduceGeminate5.replace("ss", "s");
    let reduceGeminate7 = reduceGeminate6.replace("ll", "l");
    let reduceGeminate8 = reduceGeminate7.replace("rr", "r");
    let reduceGeminate9 = reduceGeminate8.replace("nn", "n");
    let reduceGeminate10 = reduceGeminate9.replace("mm", "m");
    let reduceGeminate11 = reduceGeminate10.replace("hh", "h");

    let syllabliseJ = reduceGeminate11.includes("j") && consonants.includes(reduceGeminate11.charAt(reduceGeminate11.indexOf("j") + 1)) || reduceGeminate11[reduceGeminate11.length - 1] == "j" ? reduceGeminate11.replace("j", "i") : reduceGeminate11;

    let wordFinalJ = syllabliseJ[syllabliseJ.length - 1] == "j" ?  syllabliseJ[syllabliseJ.length - 1] = "i" : syllabliseJ;

    let syllabliseW = wordFinalJ.includes("w") && consonants.includes(wordFinalJ.charAt(wordFinalJ.indexOf("w") + 1)) || wordFinalJ[wordFinalJ.length - 1] == "w" ? wordFinalJ.replace("w", "u"): wordFinalJ;

    let fixMacronUPlusU = syllabliseW.replace("ūu", "ū");
    let fixUPlusMacronU = fixMacronUPlusU.replace("uū", "ū");
    let fixUPlusU = fixUPlusMacronU.replace("uu", "ū");

    let fixMacronIPlusI = fixUPlusU.replace("īi", "ī");
    let fixIPlusMacronI = fixMacronIPlusI.replace("iī", "ī");
    let fixIPlusI = fixIPlusMacronI.replace("ii", "ī");

    let fixMacronEplusE = fixIPlusI.replace("ēe", "ē");
    let fixEPlusMacronE = fixMacronEplusE.replace("eē", "ē");
    let fixEPlusE = fixEPlusMacronE.replace("ee", "ē");

    let fixMacronOplusO = fixEPlusE.replace("ōo", "o");
    let fixOPlusMacronO = fixMacronOplusO.replace("oō", "ō");
    let fixOPlusO = fixOPlusMacronO.replace("oo", "ō");

    let fixMacronAplusA = fixOPlusO.replace("āa", "ā");
    let fixAPlusMacronA = fixMacronAplusA.replace("aā", "ā");
    let fixAPlusA = fixAPlusMacronA.replace("aa", "ā");

    return fixAPlusA;
}

/*-----------^^^-SOUND CHANGES-^^^-----------------------------------------------------*/

let submitCases = document.getElementById("submitWords");
submitCases.addEventListener("click", createNounCases,);

let generateButton = document.getElementById("generate-vocab");
generateButton.addEventListener("click", generateCases);

function generateCases() {
    generateSg();
    generatePl();
    generateAcc();
    generateGen();
}

//randomly generates a word for singular suffix
function generateSg() {
    let sgInput = document.getElementById("singular-suffix");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        sgInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        sgInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        sgInput.value = CVC;
    } 


}

//randomly generates a word for singular suffix
function generatePl() {
    let plInput = document.getElementById("plural-suffix");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        plInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        plInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        plInput.value = CVC;
    } 


}

//randomly generates a accusative prefix
function generateAcc() {
    let accPrefix = document.getElementById("accusative-prefix");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        accPrefix.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        accPrefix.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        accPrefix.value = CVC;
    } 


}

//randomly generates a accusative prefix
function generateGen() {
    let genPrefix = document.getElementById("genitive-prefix");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        genPrefix.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        genPrefix.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        genPrefix.value = CVC;
    } 


}

//Generates the singular suffix
function createSg() {
    let inputSg = document.getElementById("singular-suffix");
    let wordSg = inputSg.value;
    let spanSg = document.getElementsByClassName("sg-suffix");
    for (i = 0; i < spanSg.length; i++) {
        if (wordSg != "") { //if no word has been input by the user, then nothing happens
            if (spanSg[i].innerHTML != soundChange(wordSg)) {
                spanSg[i].innerHTML = soundChange(wordSg);
            }
        }
    }
    return wordSg
}

//Generates the plural suffix
function createPl() {
    let inputPl = document.getElementById("plural-suffix");
    let wordPl = inputPl.value;
    let spanPl = document.getElementsByClassName("pl-suffix");
    for (i = 0; i < spanPl.length; i++) {
        if (wordPl != "") { //if no word has been input by the user, then nothing happens
            if (spanPl[i].innerHTML != soundChange(wordPl)) {
                spanPl[i].innerHTML = soundChange(wordPl);
            }
        }
    }
    return wordPl
}

//Generates the accusative prefix
function createAcc() {
    let inputAcc = document.getElementById("accusative-prefix");
    let wordAcc = inputAcc.value;
    let spanAcc = document.getElementsByClassName("acc-prefix");
    for (i = 0; i < spanAcc.length; i++) {
        if (wordAcc != "") { //if no word has been input by the user, then nothing happens
            if (spanAcc[i].innerHTML != soundChange(wordAcc)) {
                spanAcc[i].innerHTML = soundChange(wordAcc);
            }
        }
    }
    return wordAcc
}

//Generates the genitive prefix
function createGen() {
    let inputGen = document.getElementById("genitive-prefix");
    let wordGen = inputGen.value;
    let spanGen = document.getElementsByClassName("gen-prefix");
    for (i = 0; i < spanGen.length; i++) {
        if (wordGen != "") { //if no word has been input by the user, then nothing happens
            if (spanGen[i].innerHTML != soundChange(wordGen)) {
                spanGen[i].innerHTML = soundChange(wordGen);
            }
        }
    }
    return wordGen
}

function createNounCases() {
    createSg();
    createPl();
    createAcc();
    createGen();
}






//Takes the words from both text fields and splits them into arrays, then it creates an object using both arrays.
function createArrays() {
    let outputSection = document.getElementById("outputSectionNoun");
    outputSection.replaceChildren(); //clears the previous output upon refreshing the page

    //Creates a div to contain the root inflection tables, and adds an h1 to it.
    let inflectionDiv = document.createElement("div");
    inflectionDiv.classList.add("inflection-output", "scroll-container");
    let inflectionH1 = document.createElement("h1");
    inflectionH1.innerHTML = "Inflected Roots";
    outputSection.appendChild(inflectionH1);
    inflectionH1.setAttribute("id", "inflectionH1");

    outputSection.appendChild(inflectionDiv);

    //Creates a div to contain the compound inflection tables, and adds an h1 to it.
    let compoundDiv = document.createElement("div");
    compoundDiv.classList.add("compound-output", "scroll-container");
    let compoundH1 = document.createElement("h1");
    outputSection.appendChild(compoundH1);
    compoundH1.innerHTML = "Compounds";
    outputSection.appendChild(compoundDiv);

    let inputRoot = document.getElementById("inputRootNoun").value;
    let splitInputRoot = inputRoot.split(" ");
    let inputMeaning = document.getElementById("inputMeaningNoun").value;
    let splitInputMeaning = inputMeaning.split(" ");


    /*the below are the same as some functions above, I had to place them inside this function also, instead of just calling the functions because that caused an infinite loop for a reason that I do not know*/
    //makes the singular suffix
    let inputSg = document.getElementById("singular-suffix");
    let sgSuffix = inputSg.value;
    let spanSg = document.getElementsByClassName("sg-suffix");
    for (i = 0; i < spanSg.length; i++) {
        if (sgSuffix != "") { //if no word has been input by the user, then nothing happens
            if (spanSg[i].innerHTML != soundChange(sgSuffix)) {
                spanSg[i].innerHTML = soundChange(sgSuffix);
            }
        }
    }
    //makes the plural suffix
    let inputPl = document.getElementById("plural-suffix");
    let plSuffix = inputPl.value;
    let spanPl = document.getElementsByClassName("pl-suffix");
    for (i = 0; i < spanPl.length; i++) {
        if (plSuffix != "") { //if no word has been input by the user, then nothing happens
            if (spanPl[i].innerHTML != soundChange(plSuffix)) {
                spanPl[i].innerHTML = soundChange(plSuffix);
            }
        }
    }

    //Generates the accusative prefix
    let inputAcc = document.getElementById("accusative-prefix");
    let accPrefix = inputAcc.value;
    let spanAcc = document.getElementsByClassName("acc-prefix");
    for (i = 0; i < spanAcc.length; i++) {
        if (accPrefix != "") { //if no word has been input by the user, then nothing happens
            if (spanAcc[i].innerHTML != soundChange(accPrefix)) {
                spanAcc[i].innerHTML = soundChange(accPrefix);
            }
        }
    }


    //Generates the genitive prefix
    let inputGen = document.getElementById("genitive-prefix");
    let genPrefix = inputGen.value;
    let spanGen = document.getElementsByClassName("acc-prefix");
    for (i = 0; i < spanGen.length; i++) {
        if (genPrefix != "") { //if no word has been input by the user, then nothing happens
            if (spanGen[i].innerHTML != soundChange(genPrefix)) {
                spanGen[i].innerHTML = soundChange(genPrefix);
            }
        }
    }





    /*-----------------------INFLECTION HEADWORD--------------------------------------------------------------*
       
   /* Generates the headword above each inflection table, showing the root and it's meaning as a title */
    for (i = 0; i < splitInputRoot.length; i++) {
        let root = splitInputRoot[i];
        let rootMeaning = splitInputMeaning[i];

        /*Creates a new p element to which is appended the root*/
        let newHeadingProot = document.createElement("P");
        newHeadingProot.classList.add("headingProot");
        let newHeadingProotContent = document.createTextNode("-" + root + "-");
        newHeadingProot.appendChild(newHeadingProotContent);

        /*Creates a new p element to which is appended the root's meaning*/
        let newHeadingPmeaning = document.createElement("p");
        newHeadingPmeaning.classList.add("headingPmeaning");
        let newHeadingPmeaningContent = document.createTextNode('"' + rootMeaning + '"');
        newHeadingPmeaning.appendChild(newHeadingPmeaningContent);

        /* Creates a new div element to contain both the p elements.*/
        let newHeadWordDiv = document.createElement("div");
        newHeadWordDiv.classList.add("headWordDiv");
        newHeadWordDiv.appendChild(newHeadingProot);
        newHeadWordDiv.appendChild(newHeadingPmeaning);


        inflectionDiv.appendChild(newHeadWordDiv);


        /*----------------------^^^-HEADWORD-^^^-------------------------------------------------------------*/

        /*-----------------------INFLECTION TABLE--------------------------------------------------------------*/
        /*Generates a table below the headword, showing how the root is inflected.*/

        let newTable = document.createElement("table");
        inflectionDiv.appendChild(newTable);

        for (j = 0; j < 4; j++) {
            let newRow = document.createElement("tr");
            newTable.appendChild(newRow);

            let newTD1 = document.createElement("td");
            newTD1.style.fontWeight = "bold";
            newTD1.style.border = "1px solid black";

            let newTD2 = document.createElement("td");
            newTD2.style.border = "1px solid black";
            newTD2.style.borderRightStyle = "none";

            let newTD3 = document.createElement("td")
            newTD3.style.fontStyle = "italic";
            newTD3.style.border = "1px solid black";
            newTD3.style.borderLeftStyle = "none";

            let newTD4 = document.createElement("td");
            newTD4.style.border = "1px solid black";
            newTD4.style.borderRightStyle = "none";

            let newTD5 = document.createElement("td");
            newTD5.style.fontStyle = "italic";
            newTD5.style.border = "1px solid black";
            newTD5.style.borderLeftStyle = "none";

            let newTH1 = document.createElement("th");
            newTH1.style.border = "1px solid black";

            let newTH2 = document.createElement("th");
            newTH2.style.border = "1px solid black";

            let newTH3 = document.createElement("th");
            newTH3.style.border = "1px solid black";

            let nomSg = root + sgSuffix;
            let nomPl = root + plSuffix;

            let nomSgEtymology = " " + " <" + " " + root + "-" + sgSuffix;
            let nomPlEtymology = " " + " <" + " " + root + "-" + plSuffix;

            let accSg = accPrefix + root + sgSuffix
            let accPl = accPrefix + root + plSuffix

            let accSgEtymology = " " + "<" + " " + accPrefix + "-" + root + "-" + sgSuffix;
            let accPlEtymology = " " + "<" + " " + accPrefix + "-" + root + "-" + plSuffix;

            let genSg = genPrefix + root + sgSuffix
            let genPl = genPrefix + root + plSuffix

            let genSgEtymology = " " + "<" + " " + genPrefix + "-" + root + "-" + sgSuffix;
            let genPlEtymology = " " + "<" + " " + genPrefix + "-" + root + "-" + plSuffix;

            if (j == 0) {
                newTH1.innerHTML = " "
                newTH1.setAttribute("colspan", 1)
                newRow.appendChild(newTH1)

                newTH2.innerHTML = "Sg"
                newTH2.setAttribute("colspan", 2)
                newRow.appendChild(newTH2)

                newTH3.innerHTML = "Pl"
                newTH3.setAttribute("colspan", 2)
                newRow.appendChild(newTH3)

            } else if (j == 1) {
                newTD1.innerHTML = "Nom"
                newRow.appendChild(newTD1);

                newTD2.innerHTML = soundChange(nomSg);
                newRow.appendChild(newTD2);

                newTD3.innerHTML = nomSgEtymology
                newRow.appendChild(newTD3);

                newTD4.innerHTML = soundChange(nomPl);
                newRow.appendChild(newTD4);

                newTD5.innerHTML = nomPlEtymology
                newRow.appendChild(newTD5);

            } else if (j == 2) {
                newTD1.innerHTML = "Acc"
                newRow.appendChild(newTD1);

                newTD2.innerHTML = soundChange(accSg);
                newRow.appendChild(newTD2);

                newTD3.innerHTML = accSgEtymology;
                newRow.appendChild(newTD3);

                newTD4.innerHTML = soundChange(accPl);
                newRow.appendChild(newTD4);

                newTD5.innerHTML = accPlEtymology
                newRow.appendChild(newTD5);

            } else if (j == 3) {
                newTD1.innerHTML = "Gen"
                newRow.appendChild(newTD1);

                newTD2.innerHTML = soundChange(genSg);
                newRow.appendChild(newTD2);

                newTD3.innerHTML = genSgEtymology;
                newRow.appendChild(newTD3);

                newTD4.innerHTML = soundChange(genPl);
                newRow.appendChild(newTD4);

                newTD5.innerHTML = genPlEtymology;
                newRow.appendChild(newTD5);

            }
        }
    }

    /*----------------------^^^INFLECTION TABLE-^^^-------------------------------------------------------------*/

    /*-------------COMPOUND------------------------*/
    let compound = ""
    let compoundArray = [];
    let compoundMeaningArray = [];
    for (i = 0; i < splitInputRoot.length; i++) {
        for (j = 0; j < splitInputRoot.length; j++) {
            if (splitInputRoot[i] == splitInputRoot[j]) { //prevents a root being compounded with itself
                continue;
            }
            compound = splitInputRoot[i] + splitInputRoot[j];
            compoundMeaning = splitInputMeaning[i] + "-" + splitInputMeaning[j];

            compoundArray.push(compound);

            compoundMeaningArray.push(compoundMeaning);

        }
    }

    /*-----------------------COMPOUND HEADWORD--------------------------------------------------------------*
       
   /* Generates the headword above each compound table, showing the compound and it's meaning as a title */
    for (x = 0; x < compoundArray.length; x++) {
        let compoundFromArray = compoundArray[x];
        let compoundMeaningFromArray = compoundMeaningArray[x];

        /*Creates a new p element to which is appended the root*/
        let newHeadingPcompound = document.createElement("p");
        newHeadingPcompound.classList.add("headingProot");
        newHeadingPcompound.innerHTML = compoundFromArray;


        /*Creates a new p element to which is appended the root's meaning */
        let newHeadingPCompoundmeaning = document.createElement("p");
        newHeadingPCompoundmeaning.classList.add("headingPmeaning");
        newHeadingPCompoundmeaning.innerHTML = '"' + compoundMeaningFromArray + '"';

        /* Creates a new div element to contain both the p elements.*/
        let newCompoundHeadWordDiv = document.createElement("div");
        newCompoundHeadWordDiv.classList.add("headWordDiv");
        newCompoundHeadWordDiv.appendChild(newHeadingPcompound);
        newCompoundHeadWordDiv.appendChild(newHeadingPCompoundmeaning);


        compoundDiv.appendChild(newCompoundHeadWordDiv);


        /* ----------------------^^^-HEADWORD-^^^-------------------------------------------------------------*/

        /*-----------------------COMPOUND TABLE--------------------------------------------------------------*/
        /*Generates a table below the headword, showing how the root is inflected.*/
        let newCompoundTable = document.createElement("table");
        compoundDiv.appendChild(newCompoundTable);

        for (y = 0; y < 4; y++) {
            let newRowCompound = document.createElement("tr");
            newCompoundTable.appendChild(newRowCompound);

            let newTD1Compound = document.createElement("td");
            newTD1Compound.style.fontWeight = "bold";
            newTD1Compound.style.border = "1px solid black";

            let newTD2Compound = document.createElement("td");
            newTD2Compound.style.border = "1px solid black";
            newTD2Compound.style.borderRightStyle = "none";

            let newTD3Compound = document.createElement("td")
            newTD3Compound.style.fontStyle = "italic";
            newTD3Compound.style.border = "1px solid black";
            newTD3Compound.style.borderLeftStyle = "none";

            let newTD4Compound = document.createElement("td");
            newTD4Compound.style.border = "1px solid black";
            newTD4Compound.style.borderRightStyle = "none";

            let newTD5Compound = document.createElement("td");
            newTD5Compound.style.fontStyle = "italic";
            newTD5Compound.style.border = "1px solid black";
            newTD5Compound.style.borderLeftStyle = "none";

            let newTH1Compound = document.createElement("th");
            newTH1Compound.style.border = "1px solid black";

            let newTH2Compound = document.createElement("th");
            newTH2Compound.style.border = "1px solid black";

            let newTH3Compound = document.createElement("th");
            newTH3Compound.style.border = "1px solid black";

            let nomSgCompound = compoundFromArray + sgSuffix
            let nomPlCompound = compoundFromArray + plSuffix

            let nomSgEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + sgSuffix;
            let nomPlEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + plSuffix;

            let accSgCompound = accPrefix + compoundFromArray + sgSuffix
            let accPlCompound = accPrefix + compoundFromArray + plSuffix

            let accSgEtymologyCompound = " " + "<" + " " + accPrefix + "-" + compoundFromArray + "-" + sgSuffix;
            let accPlEtymologyCompound = " " + "<" + " " + accPrefix + "-" + compoundFromArray + "-" + plSuffix;

            let genSgCompound = genPrefix + compoundFromArray + sgSuffix
            let genPlCompound = genPrefix + compoundFromArray + plSuffix

            let genSgEtymologyCompound = " " + "<" + " " + genPrefix + "-" + compoundFromArray + "-" + sgSuffix;
            let genPlEtymologyCompound = " " + "<" + " " + genPrefix + "-" + compoundFromArray + "-" + plSuffix;

            if (y == 0) {
                newTH1Compound.innerHTML = " "
                newTH1Compound.setAttribute("colspan", 1)
                newRowCompound.appendChild(newTH1Compound)

                newTH2Compound.innerHTML = "Sg"
                newTH2Compound.setAttribute("colspan", 2)
                newRowCompound.appendChild(newTH2Compound)

                newTH3Compound.innerHTML = "Pl"
                newTH3Compound.setAttribute("colspan", 2)
                newRowCompound.appendChild(newTH3Compound)

            } else if (y == 1) {
                newTD1Compound.innerHTML = "Nom"
                newRowCompound.appendChild(newTD1Compound);

                newTD2Compound.innerHTML = soundChange(nomSgCompound);
                newRowCompound.appendChild(newTD2Compound);

                newTD3Compound.innerHTML = nomSgEtymologyCompound
                newRowCompound.appendChild(newTD3Compound);

                newTD4Compound.innerHTML = soundChange(nomPlCompound);
                newRowCompound.appendChild(newTD4Compound);

                newTD5Compound.innerHTML = nomPlEtymologyCompound
                newRowCompound.appendChild(newTD5Compound);

            } else if (y == 2) {
                newTD1Compound.innerHTML = "Acc"
                newRowCompound.appendChild(newTD1Compound);

                newTD2Compound.innerHTML = soundChange(accSgCompound);
                newRowCompound.appendChild(newTD2Compound);

                newTD3Compound.innerHTML = accSgEtymologyCompound;
                newRowCompound.appendChild(newTD3Compound);

                newTD4Compound.innerHTML = soundChange(accPlCompound);
                newRowCompound.appendChild(newTD4Compound);

                newTD5Compound.innerHTML = accPlEtymologyCompound
                newRowCompound.appendChild(newTD5Compound);

            } else if (y == 3) {
                newTD1Compound.innerHTML = "Gen"
                newRowCompound.appendChild(newTD1Compound);

                newTD2Compound.innerHTML = soundChange(genSgCompound);
                newRowCompound.appendChild(newTD2Compound);

                newTD3Compound.innerHTML = genSgEtymologyCompound;
                newRowCompound.appendChild(newTD3Compound);

                newTD4Compound.innerHTML = soundChange(genPlCompound);
                newRowCompound.appendChild(newTD4Compound);

                newTD5Compound.innerHTML = genPlEtymologyCompound;
                newRowCompound.appendChild(newTD5Compound);

            }

        }

    }


    /*----------------------^^^COMPOUND TABLE-^^^-------------------------------------------------------------*/

}








//Generates the word for "here"
function createHere() {
    let inputHere = document.getElementById("inputHere");
    let wordHere = inputHere.value;
    let spanHere = document.getElementsByClassName("here");
    for (i = 0; i < spanHere.length; i++) {
        if (wordHere != "") { //if no word has been input by the user, then nothing happens
            if (spanHere[i].innerHTML != soundChange(wordHere)) {
                spanHere[i].innerHTML = soundChange(wordHere);
            }
        }
    }
    return wordHere
}

//Generates the word for "here"
function createThere() {
    let inputThere = document.getElementById("inputThere");
    let wordThere = inputThere.value;
    let spanThere = document.getElementsByClassName("there");
    for (i = 0; i < spanThere.length; i++) {
        if (wordThere != "") { //if no word has been input by the user, then nothing happens
            if (spanThere[i].innerHTML != soundChange(wordThere)) {
                spanThere[i].innerHTML = soundChange(wordThere);
            }
        }
    }
    return wordThere
}

//Generates the adverbial suffix
function createAdverbialSuffix() {
    let inputAdverbialSuffix = document.getElementById("inputAdverbialSuffix");
    let wordAdverbialSuffix = inputAdverbialSuffix.value;
    let spanAdverbialSuffix = document.getElementsByClassName("adverbial-suffix");
    for (i = 0; i < spanAdverbialSuffix.length; i++) {
        if (wordAdverbialSuffix != "") { //if no word has been input by the user, then nothing happens
            if (spanAdverbialSuffix[i].innerHTML != soundChange(wordAdverbialSuffix)) {
                spanAdverbialSuffix[i].innerHTML = soundChange(wordAdverbialSuffix);
            }
        }
    }
    return wordAdverbialSuffix
}

//Creates a word for "these" by adding the plural suffix to "this"
function createThese() {
    let plSuffix = document.getElementById("plural-suffix").value;

    let thisWord = createThis();
    let thesePronoun = thisWord + plSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThese = document.getElementsByClassName("these-pronoun");
    for (i = 0; i < spanThese.length; i++) {
        if (thesePronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThese[i].innerHTML != soundChange(thesePronoun)) {
                spanThese[i].innerHTML = soundChange(thesePronoun);
            }
        }
    }
    return thesePronoun
}

//Merges the word for "there" and the adverbial suffix to create the demonstrative pronoun "that"
function createThat() {
    let wordThere = createThere(); //assigns the word "there"
    let wordAdverbialSuffix = createAdverbialSuffix(); //assigns the adverbial suffix
    let thatPronoun = wordThere + wordAdverbialSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThat = document.getElementsByClassName("that-pronoun");
    for (i = 0; i < spanThat.length; i++) {
        if (thatPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThat[i].innerHTML != soundChange(thatPronoun)) {
                spanThat[i].innerHTML = soundChange(thatPronoun);
            }
        }
    }
    return thatPronoun
}

//Creates a word for "those" by adding the plural suffix to "that"
function createThose() {
    let plSuffix = document.getElementById("plural-suffix").value;

    let thatWord = createThat();
    let thosePronoun = thatWord + plSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThose = document.getElementsByClassName("those-pronoun");
    for (i = 0; i < spanThose.length; i++) {
        if (thosePronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThose[i].innerHTML != soundChange(thosePronoun)) {
                spanThose[i].innerHTML = soundChange(thosePronoun);
            }
        }
    }
    return thosePronoun
}

//Merges the word for "here" and the adverbial suffix to create the demonstrative pronoun "this"
function createThis() {
    let wordHere = createHere(); //assigns the word "here"
    let wordAdverbialSuffix = createAdverbialSuffix(); //assigns the adverbial suffix
    let pronounThis = wordHere + wordAdverbialSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThis = document.getElementsByClassName("this-pronoun");
    for (i = 0; i < spanThis.length; i++) {
        if (pronounThis != "") { //if no word has been input by the user, then nothing happens
            if (spanThis[i].innerHTML != soundChange(pronounThis)) {
                spanThis[i].innerHTML = soundChange(pronounThis);
            }
        }
    }
    return soundChange(pronounThis);
}

//Creates accusative forms for the demonstrative pronouns. This has a distinct function from the one that creates accusative plural nouns, since demonstratives do not take on an overt singular suffix.
//takes a randomly selected noun and puts it in the nominative singular
function createAccDemonstrative() {
    let accPrefix = document.getElementById("accusative-prefix").value;
    let spanDem = document.getElementsByClassName("accusative-pronoun");
        for (i = 0; i < spanDem.length; i++) {
            let accDemonstrative = accPrefix + spanDem[i].innerHTML;
            if (accDemonstrative != "") { //if no word has been input by the user, then nothing happens
                if (spanDem[i].innerHTML != soundChange(accDemonstrative)) {
                    spanDem[i].innerHTML = soundChange(accDemonstrative);

            }
        }
    }
}


//Creates genitive forms for the demonstrative pronouns. This has a distinct function from the one that creates accusative plural nouns, since demonstratives do not take on an overt singular suffix.
function createGenDemonstrative() {
    let genPrefix = document.getElementById("genitive-prefix").value;
    let spanDem = document.getElementsByClassName("genitive-pronoun");
        for (i = 0; i < spanDem.length; i++) {
            let genDemonstrative = genPrefix + spanDem[i].innerHTML;
            if (genDemonstrative != "") { //if no word has been input by the user, then nothing happens
                if (spanDem[i].innerHTML != soundChange(genDemonstrative)) {
                    spanDem[i].innerHTML = soundChange(genDemonstrative);
                }
            }
        }
       
}

//Generates the word for "also"
function createAlso() {
    let inputAlso = document.getElementById("inputAlso");
    let wordAlso = inputAlso.value;
    let spanAlso = document.getElementsByClassName("also");
    for (i = 0; i < spanAlso.length; i++) {
        if (wordAlso != "") {
            if (spanAlso[i].innerHTML != soundChange(wordAlso)) {
                spanAlso[i].innerHTML = soundChange(wordAlso);
            }
        }
    }
    return wordAlso
}

//Generates the word for "again"
function createAgain() {
    let inputAgain = document.getElementById("inputAgain");
    let wordAgain = inputAgain.value;
    let spanAgain = document.getElementsByClassName("again");
    for (i = 0; i < spanAgain.length; i++) {
        if (wordAgain != "") {
            if (spanAgain[i].innerHTML != soundChange(wordAgain)) {
                spanAgain[i].innerHTML = soundChange(wordAgain);
            }
        }
    }
    return wordAgain
}

//Generates the word for interrogative suffix
function createInterrogativeSuffix() {
    let inputAgain = document.getElementById("inputAgain");
    let wordAgain = inputAgain.value;
    let firstTwoLetters = [];
    firstTwoLetters.push(wordAgain[0]);
    firstTwoLetters.push(wordAgain[1]);
    let interrogativePrefix = firstTwoLetters.join("")

    let spanAgain = document.getElementsByClassName("interrogative");
    for (i = 0; i < spanAgain.length; i++) {
        if (interrogativePrefix != "") {
            if (spanAgain[i].innerHTML != soundChange(interrogativePrefix)) {
                spanAgain[i].innerHTML = soundChange(interrogativePrefix);
            }
        }
    }
    return interrogativePrefix
}

//Generates the word for "place"
function createPlace() {
    let inputPlace = document.getElementById("inputPlace");
    let wordPlace = inputPlace.value;
    let spanPlace = document.getElementsByClassName("place");
    for (i = 0; i < spanPlace.length; i++) {
        if (wordPlace != "") {
            if (spanPlace[i].innerHTML != soundChange(wordPlace)) {
                spanPlace[i].innerHTML = soundChange(wordPlace);
            }
        }
    }
    return wordPlace
}

//Generates the word for "man"
function createMan() {
    let inputMan = document.getElementById("inputMan");
    let wordMan = inputMan.value;
    let spanMan = document.getElementsByClassName("man");
    for (i = 0; i < spanMan.length; i++) {
        if (wordMan != "") {
            if (spanMan[i].innerHTML != soundChange(wordMan)) {
                spanMan[i].innerHTML = soundChange(wordMan);
            }
        }
    }
    return wordMan
}

//Generates the word for "path"
function createPath() {
    let inputPath = document.getElementById("inputPath");
    let wordPath = inputPath.value;
    let spanPath = document.getElementsByClassName("path");
    for (i = 0; i < spanPath.length; i++) {
        if (wordPath != "") {
            if (spanPath[i].innerHTML != soundChange(wordPath)) {
                spanPath[i].innerHTML = soundChange(wordPath);
            }
        }
    }
    return soundChange(wordPath)
}

//Generates the word for "origin"
function createOrigin() {
    let inputOrigin = document.getElementById("inputOrigin");
    let wordOrigin = inputOrigin.value;
    let spanOrigin = document.getElementsByClassName("origin");
    for (i = 0; i < spanOrigin.length; i++) {
        if (wordOrigin != "") {
            if (spanOrigin[i].innerHTML != soundChange(wordOrigin)) {
                spanOrigin[i].innerHTML = soundChange(wordOrigin);
            }
        }
    }
    return soundChange(wordOrigin)
}

//Generates the word for "time"
function createTime() {
    let inputTime = document.getElementById("inputTime");
    let wordTime = inputTime.value;
    let spanTime = document.getElementsByClassName("time");
    for (i = 0; i < spanTime.length; i++) {
        if (wordTime != "") {
            if (spanTime[i].innerHTML != soundChange(wordTime)) {
                spanTime[i].innerHTML = soundChange(wordTime);
            }
        }
    }
    return wordTime
}

//Generates the word for "where"
function createWhere() {
    let place = document.getElementById("inputPlace").value;
    let affix = createInterrogativeSuffix();
    let where = affix + soundChange(place);
    let spanWhen = document.getElementsByClassName("where");
    for (i = 0; i < spanWhen.length; i++) {
        if (where != " ") {
            if (spanWhen[i].innerHTML != soundChange(where)) {
                spanWhen[i].innerHTML = soundChange(where);
            }
        }
    }
    return where
}

//Generates the word for "who"
function createWho() {
    let man = document.getElementById("inputMan").value;
    let affix = createInterrogativeSuffix();
    let who = affix + soundChange(man);
    let spanWho = document.getElementsByClassName("who");
    for (i = 0; i < spanWho.length; i++) {
        if (who != " ") {
            if (spanWho[i].innerHTML != soundChange(who)) {
                spanWho[i].innerHTML = soundChange(who);
            }
        }
    }
    return who
}

//Generates the word for "when"
function createWhen() {
    let time = createTime();
    let affix = createInterrogativeSuffix();
    let when = affix + soundChange(time);
    let spanWhen = document.getElementsByClassName("when");
    for (i = 0; i < spanWhen.length; i++) {
        if (when != " ") {
            if (spanWhen[i].innerHTML != soundChange(when)) {
                spanWhen[i].innerHTML = soundChange(when);
            }
        }
    }
    return when
}

//Generates the word for "what"
function createWhat() {
    let thisWord = createThis();
    let affix = createInterrogativeSuffix();
    let what = affix + thisWord;
    let spanWhat = document.getElementsByClassName("what");
    for (i = 0; i < spanWhat.length; i++) {
        if (what != " ") {
            if (spanWhat[i].innerHTML != soundChange(what)) {
                spanWhat[i].innerHTML = soundChange(what);
            }
        }
    }
    return what
}

//Generates the word for "how"
function createHow() {
    let path = createPath();
    let affix = createInterrogativeSuffix();
    let how = affix + path;
    let spanHow = document.getElementsByClassName("how");
    for (i = 0; i < spanHow.length; i++) {
        if (how != " ") {
            if (spanHow[i].innerHTML != soundChange(how)) {
                spanHow[i].innerHTML = soundChange(how);
            }
        }
    }
    return soundChange(how);
}

//Generates the word for "why"
function createWhy() {
    let origin = createOrigin();
    let affix = createInterrogativeSuffix();
    let why = affix + origin;
    let spanWhy = document.getElementsByClassName("why");
    for (i = 0; i < spanWhy.length; i++) {
        if (why != " ") {
            if (spanWhy[i].innerHTML != soundChange(why)) {
                spanWhy[i].innerHTML = soundChange(why);
            }
        }
    }
    return soundChange(why);
}


//Generates the relative pronoun by merging the word for "this" and "also"
function createRelativePronoun() {
    let wordThis = createThis(); //assigns the word "this"
    let wordAlso = createAlso(); //assigns the word "also"
    let RelativePronoun = wordThis + wordAlso;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativePronoun = document.getElementsByClassName("relative-pronoun");
    for (i = 0; i < spanRelativePronoun.length; i++) {
        if (RelativePronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanRelativePronoun[i].innerHTML != soundChange(RelativePronoun)) {
                spanRelativePronoun[i].innerHTML = soundChange(RelativePronoun);
            }
        }
    }
    return soundChange(RelativePronoun)
}

//Generates the nominaliser suffix
function createNominaliserSuffix() {
    let inputNominaliserSuffix = document.getElementById("inputNominaliser");
    let nominaliserSuffix = inputNominaliserSuffix.value;
    let spanNominaliserSuffix = document.getElementsByClassName("nominaliser-suffix");
    for (i = 0; i < spanNominaliserSuffix.length; i++) {
        if (nominaliserSuffix != "") { //if no word has been input by the user, then nothing happens
            if (spanNominaliserSuffix[i].innerHTML != soundChange(nominaliserSuffix)) {
                spanNominaliserSuffix[i].innerHTML = soundChange(nominaliserSuffix);
            }
        }
    }
    return nominaliserSuffix
}

//Generates the first person pronoun
function createFirstPersonPronoun() {
    let inputFirstPersonPronoun = document.getElementById("first-person-pronoun");
    let FirstPersonPronoun = inputFirstPersonPronoun.value;
    let spanFirstPersonPronoun = document.getElementsByClassName("firstPersonPronoun");
    for (i = 0; i < spanFirstPersonPronoun.length; i++) {
        if (FirstPersonPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanFirstPersonPronoun[i].innerHTML != soundChange(FirstPersonPronoun)) {
                spanFirstPersonPronoun[i].innerHTML = soundChange(FirstPersonPronoun);
            }
        }
    }
    return FirstPersonPronoun
}

//Generates the first person pronoun
function createSecondPersonPronoun() {
    let inputSecondPersonPronoun = document.getElementById("second-person-pronoun");
    let SecondPersonPronoun = inputSecondPersonPronoun.value;
    let spanSecondPersonPronoun = document.getElementsByClassName("secondPersonPronoun");
    for (i = 0; i < spanSecondPersonPronoun.length; i++) {
        if (SecondPersonPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanSecondPersonPronoun[i].innerHTML != soundChange(SecondPersonPronoun)) {
                spanSecondPersonPronoun[i].innerHTML = soundChange(SecondPersonPronoun);
            }
        }
    }
    return SecondPersonPronoun
}

//Generates the non-past-suffix"
function createNonPastSuffix() {
    let inputNonPastSuffix = document.getElementById("non-past");
    let wordNonPastSuffix = inputNonPastSuffix.value;
    let spanNonPastSuffix = document.getElementsByClassName("non-past");
    for (i = 0; i < spanNonPastSuffix.length; i++) {
        if (wordNonPastSuffix != "") {
            if (spanNonPastSuffix[i].innerHTML != soundChange(wordNonPastSuffix)) {
                spanNonPastSuffix[i].innerHTML = soundChange(wordNonPastSuffix);
            }
        }
    }
    return wordNonPastSuffix;
}

function createCopula() {
    let inputCopula = document.getElementById("inputToBe");
    let wordCopula = inputCopula.value;
    let spanCopula = document.getElementsByClassName("copula");
    for (i = 0; i < spanCopula.length; i++) {
        if (wordCopula != "") {
            if (spanCopula[i].innerHTML != soundChange(wordCopula)) {
                spanCopula[i].innerHTML = soundChange(wordCopula);
            }
        }
    }
    return wordCopula
}

function createCopulaSgNonPast() {
    let copula = createCopula();
    let nonPastSuffix = createNonPastSuffix();
    let CopulaSgNonPast = copula + nonPastSuffix

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativeCopulaSgNonPast = document.getElementsByClassName("copula-sg-non-past");
    for (i = 0; i < spanRelativeCopulaSgNonPast.length; i++) {
        if (copula != "") { //if no word has been input by the user, then nothing happens
            if (spanRelativeCopulaSgNonPast[i].innerHTML != soundChange(CopulaSgNonPast)) {
                spanRelativeCopulaSgNonPast[i].innerHTML = soundChange(CopulaSgNonPast);
            }
        }
    }
    return CopulaSgNonPast;
}

function createCopulaPlNonPast() {

    let plSuffix = document.getElementById("plural-suffix").value;

    let copula = createCopula();
    let nonPastSuffix = createNonPastSuffix();
    let CopulaPlNonPast = plSuffix + copula + nonPastSuffix
    
    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativeCopulaPlNonPast = document.getElementsByClassName("copula-pl-non-past");
    for (i = 0; i < spanRelativeCopulaPlNonPast.length; i++) {
        if (copula != "") { //if no word has been input by the user, then nothing happens
            if (spanRelativeCopulaPlNonPast[i].innerHTML != soundChange(CopulaPlNonPast)) {
                spanRelativeCopulaPlNonPast[i].innerHTML = soundChange(CopulaPlNonPast);
            }
        }
    }
    return CopulaPlNonPast;

}

//selects a random adjective from the adjectives entered by the user
function createRandomAdjective() {
    //puts all of the input adjectives into one array
    let inputAdjective = document.getElementById("inputRootAdj").value;
    let splitAdjective = inputAdjective.split(" ");

    //puts all of the input adjectives' meanings into one array
    let inputAdjectiveMeaning = document.getElementById("inputMeaningAdj").value;
    let splitAdjectiveMeaning = inputAdjectiveMeaning.split(" ");
    let spanAdjective = document.getElementsByClassName("adjective");

    //the HTML file has a series of span elements with the id names adjective1, adjective2, adjective3 and so on. This loop ensures that all of those spans are affected by changing the id name each time by increasing the final number by one each time. Each span element must receive a unique randomly selected noun, hence why I had to use id for them and not class.
    let num = 1;
    for (i = 0; i <= spanAdjective.length; i++) {
        let randomNumber = Math.floor(Math.random() * splitAdjective.length);//chooses a random integer between 0 and the array's length
        let randomAdjective = splitAdjective[randomNumber] //random adjective from the array
        document.getElementById("adjective" + num.toString()).innerHTML = soundChange(randomAdjective);
        document.getElementById("adjective-meaning" + num.toString()).innerHTML = splitAdjectiveMeaning[randomNumber]
        num++;

    }
}


//selects a random noun from the nouns entered by the user
function createRandomNoun() {
    //puts all of the input adjectives into one array
    let inputNoun = document.getElementById("inputRootNoun").value;
    let splitNoun = inputNoun.split(" ");

    //puts all of the input adjectives' meanings into one array
    let inputNounMeaning = document.getElementById("inputMeaningNoun").value;
    let splitNounMeaning = inputNounMeaning.split(" ");

    let spanNoun = document.getElementsByClassName("noun");

    //the HTML file has a series of span elements with the id names noun1, noun2, noun3 and so on. This loop ensures that all of those spans are affected by changing the id name each time by increasing the final number by one each time. Each span element must receive a unique randomly selected noun, hence why I had to use id for them and not class.
    let num = 1;

    for (i = 0; i < spanNoun.length; i++) {
        let randomNumber = Math.floor(Math.random() * splitNoun.length);//chooses a random integer between 0 and the array's length
        let randomNoun = splitNoun[randomNumber] //random noun from the array
        document.getElementById("noun" + num.toString()).innerHTML = soundChange(randomNoun);
        document.getElementById("noun-meaning" + num.toString()).innerHTML = splitNounMeaning[randomNumber]
        num++;

    }
}

//selects a random verb from the nouns entered by the user
function createRandomVerb() {
    //puts all of the input verbs into one array
    let inputVerb = document.getElementById("inputRootVerb").value;
    let splitVerb = inputVerb.split(" ");

    //puts all of the input verbs meanings into one array
    let inputVerbMeaning = document.getElementById("inputMeaningVerb").value;
    let splitVerbMeaning = inputVerbMeaning.split(" ");

    let spanVerb = document.getElementsByClassName("verb");

    let num = 1;
    for (i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * splitVerb.length);
        let randomVerb = splitVerb[randomNumber] //random verb from the array
        document.getElementById("verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("verb-meaning" + num.toString()).innerHTML = splitVerbMeaning[randomNumber]
        document.getElementById("verb-past-meaning" + num.toString()).innerHTML = splitVerbMeaning[randomNumber]
        num++;
    }
    //creates copy of the verb's meaning
    copyNum = 1;
    for(i = 0; i < document.getElementsByClassName("copy-verb-meaning").length; i++) {   
        let verbMeaning =  document.getElementById("verb-meaning" + copyNum.toString())
        let verbMeaningCopy = document.getElementsByClassName("verb-meaning-copy" + copyNum.toString())
            for(j = 0; j < verbMeaningCopy.length; j++) {
                verbMeaningCopy[j].innerHTML = verbMeaning.innerHTML;
            }
        copyNum++;
        }

    //creates copies of the verb
    copyNum2 = 1;
    for(i = 0; i < document.getElementsByClassName("copy-verb").length; i++) {   
        let verb =  document.getElementById("verb" + copyNum2.toString())
        let verbCopy = document.getElementsByClassName("verb-copy" + copyNum2.toString())
            for(j = 0; j < verbCopy.length; j++) {
                verbCopy[j].innerHTML = verb.innerHTML;
            }
        copyNum2++;
        }


}

//When I wish to display the same randomly generated word several times within the same example, only the first instance is randomly generated, the rest merely copy the test content of the first
function createCopy() {

    let copyNoun = document.getElementsByClassName("copy-noun");
    let nounNum = 1
    for (i = 0; i < copyNoun.length; i++) {
        let originalNoun = document.getElementById("noun" + nounNum.toString());
        document.getElementsByClassName("noun-copy" + nounNum.toString()).innerHTML = originalNoun.innerHTML;
        nounNum++
    }

    // let copyNounMeaning = document.getElementsByClassName("copy-noun-meaning");
    // let nounMeaningNum = 1
    // for (i = 0; i < copyNounMeaning.length; i++) {
    //     let originalNounMeaning = document.getElementById("noun-meaning" + nounMeaningNum.toString());
    //     document.getElementsByClassName("noun-meaning-copy" + nounMeaningNum.toString()).innerHTML = originalNounMeaning.innerHTML;
    //     nounMeaningNum++
    // } FIX THIS AND REPLACE CODE BELOW



    let nounMeaning1 = document.getElementById("noun-meaning1");
    let nounMeaning1Content = nounMeaning1.innerHTML;
    let NounMeaningCopy1 = document.getElementsByClassName("noun-meaning-copy1");
    for (i = 0; i < NounMeaningCopy1.length; i++) {
        NounMeaningCopy1[i].innerHTML = nounMeaning1Content;
    }

    let nounMeaning2 = document.getElementById("noun-meaning2");
    let nounMeaning2Content = nounMeaning2.innerHTML;
    let NounMeaningCopy2 = document.getElementsByClassName("noun-meaning-copy2");
    for (i = 0; i < NounMeaningCopy2.length; i++) {
        NounMeaningCopy2[i].innerHTML = nounMeaning2Content;
    }

    let nounMeaning3 = document.getElementById("noun-meaning3");
    let nounMeaning3Content = nounMeaning3.innerHTML;
    let NounMeaningCopy3 = document.getElementsByClassName("noun-meaning-copy3");
    for (i = 0; i < NounMeaningCopy3.length; i++) {
        NounMeaningCopy3[i].innerHTML = nounMeaning3Content;
    }

    let nounMeaning4 = document.getElementById("noun-meaning4");
    let nounMeaning4Content = nounMeaning4.innerHTML;
    let NounMeaningCopy4 = document.getElementsByClassName("noun-meaning-copy4");
    for (i = 0; i < NounMeaningCopy4.length; i++) {
        NounMeaningCopy4[i].innerHTML = nounMeaning4Content;
    }

    let nounMeaning5 = document.getElementById("noun-meaning5");
    let nounMeaning5Content = nounMeaning5.innerHTML;
    let NounMeaningCopy5 = document.getElementsByClassName("noun-meaning-copy5");
    for (i = 0; i < NounMeaningCopy5.length; i++) {
        NounMeaningCopy5[i].innerHTML = nounMeaning5Content;
    }

    let nounMeaning6 = document.getElementById("noun-meaning6");
    let nounMeaning6Content = nounMeaning6.innerHTML;
    let NounMeaningCopy6 = document.getElementsByClassName("noun-meaning-copy6");
    for (i = 0; i < NounMeaningCopy6.length; i++) {
        NounMeaningCopy6[i].innerHTML = nounMeaning6Content;
    }

    let nounMeaning7 = document.getElementById("noun-meaning7");
    let nounMeaning7Content = nounMeaning7.innerHTML;
    let NounMeaningCopy7 = document.getElementsByClassName("noun-meaning-copy7");
    for (i = 0; i < NounMeaningCopy7.length; i++) {
        NounMeaningCopy7[i].innerHTML = nounMeaning7Content;
    }

    let nounMeaning8 = document.getElementById("noun-meaning8");
    let nounMeaning8Content = nounMeaning8.innerHTML;
    let NounMeaningCopy8 = document.getElementsByClassName("noun-meaning-copy8");
    for (i = 0; i < NounMeaningCopy8.length; i++) {
        NounMeaningCopy8[i].innerHTML = nounMeaning8Content;
    }

    let nounMeaning9 = document.getElementById("noun-meaning9");
    let nounMeaning9Content = nounMeaning9.innerHTML;
    let NounMeaningCopy9 = document.getElementsByClassName("noun-meaning-copy9");
    for (i = 0; i < NounMeaningCopy9.length; i++) {
        NounMeaningCopy9[i].innerHTML = nounMeaning9Content;
    }

    let adjective1 = document.getElementById("adjective1");
    let adjective1Content = adjective1.innerHTML;
    let adjectiveCopy1 = document.getElementsByClassName("adjective1-copy");
    for (i = 0; i < adjectiveCopy1.length; i++) {
        adjectiveCopy1[i].innerHTML = adjective1Content;
    }

    let adjective2 = document.getElementById("adjective2");
    let adjective2Content = adjective2.innerHTML;
    let adjectiveCopy2 = document.getElementsByClassName("adjective2-copy");
    for (i = 0; i < adjectiveCopy2.length; i++) {
        adjectiveCopy2[i].innerHTML = adjective2Content;
    }

    let adjective3 = document.getElementById("adjective3");
    let adjective3Content = adjective3.innerHTML;
    let adjectiveCopy3 = document.getElementsByClassName("adjective3-copy");
    for (i = 0; i < adjectiveCopy3.length; i++) {
        adjectiveCopy3[i].innerHTML = adjective3Content;
    }

    let adjective4 = document.getElementById("adjective4");
    let adjective4Content = adjective4.innerHTML;
    let adjectiveCopy4 = document.getElementsByClassName("adjective4-copy");
    for (i = 0; i < adjectiveCopy4.length; i++) {
        adjectiveCopy4[i].innerHTML = adjective4Content;
    }

    let adjective5 = document.getElementById("adjective5");
    let adjective5Content = adjective5.innerHTML;
    let adjectiveCopy5 = document.getElementsByClassName("adjective5-copy");
    for (i = 0; i < adjectiveCopy5.length; i++) {
        adjectiveCopy5[i].innerHTML = adjective5Content;
    }

    let adjective6 = document.getElementById("adjective6");
    let adjective6Content = adjective6.innerHTML;
    let adjectiveCopy6 = document.getElementsByClassName("adjective6-copy");
    for (i = 0; i < adjectiveCopy6.length; i++) {
        adjectiveCopy6[i].innerHTML = adjective6Content;
    }

    let adjective7 = document.getElementById("adjective7");
    let adjective7Content = adjective7.innerHTML;
    let adjectiveCopy7 = document.getElementsByClassName("adjective7-copy");
    for (i = 0; i < adjectiveCopy7.length; i++) {
        adjectiveCopy7[i].innerHTML = adjective7Content;
    }

    let adjective8 = document.getElementById("adjective8");
    let adjective8Content = adjective8.innerHTML;
    let adjectiveCopy8 = document.getElementsByClassName("adjective8-copy");
    for (i = 0; i < adjectiveCopy8.length; i++) {
        adjectiveCopy8[i].innerHTML = adjective8Content;
    }

    let adjective9 = document.getElementById("adjective9");
    let adjective9Content = adjective9.innerHTML;
    let adjectiveCopy9 = document.getElementsByClassName("adjective9-copy");
    for (i = 0; i < adjectiveCopy9.length; i++) {
        adjectiveCopy9[i].innerHTML = adjective9Content;
    }



    let adjectiveMeaning1 = document.getElementById("adjective-meaning1");
    let adjectiveMeaning1Content = adjectiveMeaning1.innerHTML;
    let adjectiveMeaningCopy1 = document.getElementsByClassName("adjective-meaning1-copy");
    for (i = 0; i < adjectiveMeaningCopy1.length; i++) {
        adjectiveMeaningCopy1[i].innerHTML = adjectiveMeaning1Content;
    }

    let adjectiveMeaning2 = document.getElementById("adjective-meaning2");
    let adjectiveMeaning2Content = adjectiveMeaning2.innerHTML;
    let adjectiveMeaningCopy2 = document.getElementsByClassName("adjective-meaning2-copy");
    for (i = 0; i < adjectiveMeaningCopy2.length; i++) {
        adjectiveMeaningCopy2[i].innerHTML = adjectiveMeaning2Content;
    }

    let adjectiveMeaning3 = document.getElementById("adjective-meaning3");
    let adjectiveMeaning3Content = adjectiveMeaning3.innerHTML;
    let adjectiveMeaningCopy3 = document.getElementsByClassName("adjective-meaning3-copy");
    for (i = 0; i < adjectiveMeaningCopy3.length; i++) {
        adjectiveMeaningCopy3[i].innerHTML = adjectiveMeaning3Content;
    }

    let adjectiveMeaning4 = document.getElementById("adjective-meaning4");
    let adjectiveMeaning4Content = adjectiveMeaning4.innerHTML;
    let adjectiveMeaningCopy4 = document.getElementsByClassName("adjective-meaning4-copy");
    for (i = 0; i < adjectiveMeaningCopy4.length; i++) {
        adjectiveMeaningCopy4[i].innerHTML = adjectiveMeaning4Content;
    }

    let adjectiveMeaning5 = document.getElementById("adjective-meaning5");
    let adjectiveMeaning5Content = adjectiveMeaning5.innerHTML;
    let adjectiveMeaningCopy5 = document.getElementsByClassName("adjective-meaning5-copy");
    for (i = 0; i < adjectiveMeaningCopy5.length; i++) {
        adjectiveMeaningCopy5[i].innerHTML = adjectiveMeaning5Content;
    }



}

//takes a randomly selected noun and puts it in the nominative singular
function createNounNomSg() {
    let sgSuffix = document.getElementById("singular-suffix").value;
    let spanNoun = document.getElementsByClassName("noun-nom-sg")
        for (i = 0; i < spanNoun.length; i++) {
            let nounNomSg = spanNoun[i].innerHTML + sgSuffix;
            if (nounNomSg != "") { //if no word has been input by the user, then nothing happens
                if (spanNoun[i].innerHTML != soundChange(nounNomSg)) {
                    spanNoun[i].innerHTML = soundChange(nounNomSg);
                }
            }
        }
}

//takes a noun and puts it in the accusative singular
function createAccNomSg() {
    let sgSuffix = document.getElementById("singular-suffix").value;
    let accPrefix = document.getElementById("accusative-prefix").value;

    let spanNoun = document.getElementsByClassName("noun-acc-sg")
    for (i = 0; i < spanNoun.length; i++) {
        let nounAccSg = accPrefix + spanNoun[i].innerHTML + sgSuffix;
        if (nounAccSg != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounAccSg)) {
                spanNoun[i].innerHTML = soundChange(nounAccSg);
            }
        }
    }
}

//takes a noun and puts it in the genitive singular
function createGenNomSg() {
    let sgSuffix = document.getElementById("singular-suffix").value;
    let genPrefix = document.getElementById("genitive-prefix").value;
    let spanNoun = document.getElementsByClassName("noun-gen-sg")
    for (i = 0; i < spanNoun.length; i++) {
        let nounGenSg = genPrefix + spanNoun[i].innerHTML + sgSuffix;
        if (nounGenSg != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounGenSg)) {
                spanNoun[i].innerHTML = soundChange(nounGenSg);
            }
        }
    }
}

//takes a noun and puts it in the nominative plural
function createNounNomPl() {
    let plSuffix = document.getElementById("plural-suffix").value;
    let spanNoun = document.getElementsByClassName("noun-nom-pl")
    for (i = 0; i < spanNoun.length; i++) {
        let nounNomPl = spanNoun[i].innerHTML + plSuffix;
        if (nounNomPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounNomPl)) {
                spanNoun[i].innerHTML = soundChange(nounNomPl);
            }
        }
    }
}

//takes a noun and puts it in the accusative plural
function createNounAccPl() {
    let plSuffix = document.getElementById("plural-suffix").value;
    let accPrefix = document.getElementById("accusative-prefix").value;

    let spanNoun = document.getElementsByClassName("noun-acc-pl")
    for (i = 0; i < spanNoun.length; i++) {
        let nounAccPl = accPrefix + spanNoun[i].innerHTML + plSuffix;
        if (nounAccPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounAccPl)) {
                spanNoun[i].innerHTML = soundChange(nounAccPl);
            }
        }
    }
}

//takes a noun and puts it in the genitive plural
function createNounGenPl() {
    let plSuffix = document.getElementById("plural-suffix").value;
    let genPrefix = document.getElementById("genitive-prefix").value;
    let spanNoun = document.getElementsByClassName("noun-gen-pl")
    for (i = 0; i < spanNoun.length; i++) {
        let nounGenPl = genPrefix + spanNoun[i].innerHTML + plSuffix;
        if (nounGenPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounGenPl)) {
                spanNoun[i].innerHTML = soundChange(nounGenPl);
            }
        }
    }
}


//creates a bahuvrihi compound for the example shown in the adjective section
function createBahuvrihi() {
    let sgSuffix = document.getElementById("singular-suffix").value;

    let noun = document.getElementById("noun5");
    let nominaliser = createNominaliserSuffix();
    let adjective = document.getElementById("adjective5");
    let adjectiveCopy = document.getElementById("adjective5");
   
    let adjectiveNominaliserSg = adjective.innerHTML + nominaliser + sgSuffix;

    let bahuvrihi = noun.innerHTML + soundChange(adjectiveNominaliserSg);
   document.getElementById("bahuvrihi").innerHTML = soundChange(bahuvrihi);

   
   let nounInBreakdown = document.getElementById("noun5Also");
   nounInBreakdown.innerHTML = noun.innerHTML;

   let nounNomSgInBreakdown = document.getElementById("noun5AlsoNomSg");
   nounPlusKo = noun.innerHTML + sgSuffix
   nounNomSgInBreakdown.innerHTML = soundChange(nounPlusKo);
   
    

    let adjInBreakdown = document.getElementById("adjective5Also");
    adjInBreakdown.innerHTML = adjectiveCopy.innerHTML;

    
}

//takes a randomly selected adjective, attaches the nominaliser suffix, and puts it in the nominative singular
function createAdjNomSg() {
    let sgSuffix = document.getElementById("singular-suffix").value;
    let nominaliser = createNominaliserSuffix();
    let spanAdj = document.getElementsByClassName("adjective-nom-sg")
    for (i = 0; i < spanAdj.length; i++) {
        let adjNomSg = spanAdj[i].innerHTML + nominaliser + sgSuffix;
        if (adjNomSg != "") { //if no word has been input by the user, then nothing happens
            if (spanAdj[i].innerHTML != soundChange(adjNomSg)) {
                spanAdj[i].innerHTML = soundChange(adjNomSg);
            }
        }

    }
}

//takes a randomly selected noun and puts it in the nominative plural
function createAdjNomPl() {
    let plSuffix = document.getElementById("plural-suffix").value;
    let nominaliser = createNominaliserSuffix();
    let spanAdj = document.getElementsByClassName("adjective-nom-pl")
    for (i = 0; i < spanAdj.length; i++) {
        let adjNomPl = spanAdj[i].innerHTML + nominaliser + plSuffix;
        if (adjNomPl != "") { //if no word has been input by the user, then nothing happens
            if (spanAdj[i].innerHTML != soundChange(adjNomPl)) {
                spanAdj[i].innerHTML = soundChange(adjNomPl);
            }
        }
    }

    
}

//if a noun is plural, this makes sure that it's English translation is also plural
function makeMeaningPlural() {
    let Plural = document.getElementsByClassName("plural-meaning")
    for (i = 0; i < Plural.length; i++) {
        let indexNum = nounArray.indexOf(Plural[i].innerHTML);
        Plural[i].innerHTML = nounArrayPlural[indexNum];
    }
}

//if a verb is in the past tense, this makes sure that it's English translation is also past tense
function makeMeaningPast() {
    let past = document.getElementsByClassName("past")
    for (i = 0; i < past.length; i++) {
        let indexNum = verbArray.indexOf(past[i].innerHTML);
        past[i].innerHTML = verbPastArray[indexNum];
    }
}

//takes a randomly selected verb and puts it in the non-past-tense
function createVerbNonPast() {
    let nonPastSuffix = document.getElementById("non-past").value;
    let spanNonPast = document.getElementsByClassName("verb-non-past")
        for (i = 0; i < spanNonPast.length; i++) {
            let verbNonPast = spanNonPast[i].innerHTML + nonPastSuffix;
            if (verbNonPast != "") { //if no word has been input by the user, then nothing happens
                if (spanNonPast[i].innerHTML != soundChange(verbNonPast)) {
                    spanNonPast[i].innerHTML = soundChange(verbNonPast);
                }
            }
        }
}


function createFirstPersonVerbPrefix() {
    let firstPersonPronoun = document.getElementById("first-person-pronoun");
    let pronoun = firstPersonPronoun.value;
    let firstTwoLetters = [];
    firstTwoLetters.push(pronoun[0]);
    firstTwoLetters.push(pronoun[1]);
    let prefix = firstTwoLetters.join("")

    let spanPrefix = document.getElementsByClassName("first-person-prefix");
    for (i = 0; i < spanPrefix.length; i++) {
        if (prefix != "") {
            if (spanPrefix[i].innerHTML != soundChange(prefix)) {
                spanPrefix[i].innerHTML = soundChange(prefix);
            }
        }
    }
    return prefix
}

function createSecondPersonVerbPrefix() {
    let secondPersonPronoun = document.getElementById("second-person-pronoun");
    let pronoun = secondPersonPronoun.value;
    let firstTwoLetters = [];
    firstTwoLetters.push(pronoun[0]);
    firstTwoLetters.push(pronoun[1]);
    let prefix = firstTwoLetters.join("")

    let spanPrefix = document.getElementsByClassName("second-person-prefix");
    for (i = 0; i < spanPrefix.length; i++) {
        if (prefix != "") {
            if (spanPrefix[i].innerHTML != soundChange(prefix)) {
                spanPrefix[i].innerHTML = soundChange(prefix);
            }
        }
    }
    return prefix
}

//takes a randomly selected verb and puts it in the first-person
function createVerbFirstPerson() {
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let spanFirstPerson = document.getElementsByClassName("first-person")
        for (i = 0; i < spanFirstPerson.length; i++) {
            let verbFirstPerson = firstPersonPrefix + spanFirstPerson[i].innerHTML;
            if (verbFirstPerson != "") { //if no word has been input by the user, then nothing happens
                if (spanFirstPerson[i].innerHTML != soundChange(verbFirstPerson)) {
                    spanFirstPerson[i].innerHTML = soundChange(verbFirstPerson);
                }
            }
        }
}

//takes a randomly selected verb and puts it in the second-person
function createVerbSecondPerson() {
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let spanSecondPerson = document.getElementsByClassName("second-person")
        for (i = 0; i < spanSecondPerson.length; i++) {
            let verbSecondPerson = secondPersonPrefix + spanSecondPerson[i].innerHTML;
            if (verbSecondPerson != "") { //if no word has been input by the user, then nothing happens
                if (spanSecondPerson[i].innerHTML != soundChange(verbSecondPerson)) {
                    spanSecondPerson[i].innerHTML = soundChange(verbSecondPerson);
                }
            }
        }
}

let submitWords = document.getElementById("submitWords");
submitWords.addEventListener("click", buttonFunctions,);

function buttonFunctions() {
    createHere();
    createThere()
    createAdverbialSuffix();
    createThis();
    createThese();
    createThat();
    createThose();
    createAccDemonstrative();
    createGenDemonstrative();
    createAlso();
    createAgain();
    createPlace();
    createWhere();
    createMan();
    createPath();
    createOrigin();
    createTime();
    createWhere();
    createWho();
    createWhat();
    createWhen();
    createHow();
    createWhy();
    createInterrogativeSuffix();
    createRelativePronoun();
    createNominaliserSuffix();
    createFirstPersonPronoun();
    createSecondPersonPronoun();
    createNonPastSuffix();
    createCopula();
    createCopulaSgNonPast();
    createCopulaPlNonPast();
    createRandomAdjective();
    createRandomNoun();
    createRandomVerb();
    createCopy();
    createNounNomSg();
    createAccNomSg();
    createGenNomSg();
    createNounNomPl();
    createNounAccPl();
    createNounGenPl();
    createAdjNomSg();
    createAdjNomPl();
    createBahuvrihi();
    makeMeaningPlural();
    makeMeaningPast();
    createVerbNonPast();
    createFirstPersonVerbPrefix();
    createSecondPersonVerbPrefix();
    createVerbFirstPerson();
    createVerbSecondPerson();
    
}

/*-------RANDOM GENERATION-------------------*/
//an array of all consonants and vowels in the language

/*-----Generates Phonemic Inventory----*/
let consonants = ["m", "n", "p", "b", "t", "d", "k", "g", "f", "s", "r", "l", "j", "w"];
let vowels = ["i", "u", "o", "e", "a"];

let generatePhonemeButton = document.getElementById("generatePhonemes");
generatePhonemeButton.addEventListener("click", generatePhonemicInventory)
let resetPhonemes = document.getElementById("resetPhonemes")
resetPhonemes.addEventListener("click", resetInventory);


function generatePhonemicInventory() {
    let enteredConsonants = document.getElementById("consonants").value;
    let enteredVowels = document.getElementById("vowels").value;

    consonants = enteredConsonants.split(" ");
    vowels = enteredVowels.split(" ");
}

function resetInventory() {
   document.getElementById("consonants").value = "m n p b t d k g f s r l j w"
   document.getElementById("vowels").value = "a e i o u"
}


/*---Generates Words-----*/

let generateVocabButton = document.getElementById("generate-vocab");
generateVocabButton.addEventListener("click", generateVocab);

function generateVocab() {
    generateNouns();
    generateNounMeanings();
    generateAdjectives();
    generateAdjectiveMeaning();
    generateCopula();
    generateVerbs();
    generateVerbMeanings();
    generateNominaliser();
    generateAlso();
    generateAgain();
    generatePlace();
    generateMan();
    generateTime();
    generateHere()
    generateThere();
    generatePath();
    generateOrigin();
    generateAdverbialSuffix();
    generateFirstPersonPronoun();
    generateSecondPersonPronoun();
    generateNonPastSuffix();
}

//randomly generates roots according to the root structure, as well as assigning them randomly selected meanings
function generateNouns() {
    let nounInput = document.getElementById("inputRootNoun");
    let randomNounArray = [] 

    let numberOfNouns = document.getElementById("select-amount").value;
    numberOfNouns = Number(numberOfNouns);
    
    for(i = 0; i < numberOfNouns; i++) {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            randomNounArray.push(CV)

        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            randomNounArray.push(CVC)

        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            randomNounArray.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            randomNounArray.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            randomNounArray.push(CVCC)

        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            randomNounArray.push(CVCCV)
        }
    }


    //collects each generated word from each loop and puts them into one array, which is then joined into a single string 
    let generatedWordsArray = [];
    for (i = 0; i < numberOfNouns; i++) {
        generatedWordsArray.push(randomNounArray[i])
    }

    nounInput.value = generatedWordsArray.join(" ");
}

//randomly selects meanings for the randomly generated adjectives
function generateNounMeanings() {
    let nounMeaningInput = document.getElementById("inputMeaningNoun");
    let numberOfNouns = document.getElementById("select-amount").value;

    //collects each select word from each loop and puts them into one array, which is then joined into a single string 
    let selectedWordsArray = [];
    for (i = 0; i < numberOfNouns; i++) {
        selectedWordsArray.push(nounArray[Math.floor(Math.random() * nounArray.length)])
    }

    nounMeaningInput.value = selectedWordsArray.join(" ");
}

//randomly generates roots according to the root structure, as well as assigning them randomly selected meanings
function generateAdjectives() {
    let adjectiveInput = document.getElementById("inputRootAdj");
    let randomAdjectiveArray = [] 

    let numberOfAdjectives = document.getElementById("select-amount").value;
    numberOfAdjectives = Number(numberOfAdjectives);

    for(i = 0; i < numberOfAdjectives; i++) {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            randomAdjectiveArray.push(CV)

        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            randomAdjectiveArray.push(CVC)

        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            randomAdjectiveArray.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            randomAdjectiveArray.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            randomAdjectiveArray.push(CVCC)
        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            randomAdjectiveArray.push(CVCCV)
        }
    }
        
    let generatedWordsArray = [];
    for (i = 0; i < numberOfAdjectives; i++) {
        generatedWordsArray.push(randomAdjectiveArray[i])
    }

    adjectiveInput.value = generatedWordsArray.join(" ");
}

//randomly selects meanings for the randomly generated adjectives
function generateAdjectiveMeaning() {
    let adjectiveMeaningInput = document.getElementById("inputMeaningAdj");

    let adjectiveArray = ["aback","abaft","abandoned","abashed","aberrant","abhorrent","abiding","abject","ablaze","able","abnormal","aboard","aboriginal","abortive","abounding","abrasive","abrupt","absent","absorbed","absorbing","abstracted","absurd","abundant","abusive","acceptable","accessible","accidental","accurate","acid","acidic","acoustic","acrid","actually","ad","hoc","adamant","adaptable","addicted","adhesive","adjoining","adorable","adventurous","afraid","aggressive","agonizing","agreeable","ahead","ajar","alcoholic","alert","alike","alive","alleged","alluring","aloof","amazing","ambiguous","ambitious","amuck","amused","amusing","ancient","angry","animated","annoyed","annoying","anxious","apathetic","aquatic","aromatic","arrogant","ashamed","aspiring","assorted","astonishing","attractive","auspicious","automatic","available","average","awake","aware","awesome","awful","axiomatic","bad","barbarous","bashful","bawdy","beautiful","befitting","belligerent","beneficial","bent","berserk","best","better","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","boorish","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","bright","broad","broken","brown","bumpy","burly","bustling","busy","cagey","calculating","callous","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","changeable","charming","cheap","cheerful","chemical","chief","childlike","chilly","chivalrous","chubby","chunky","clammy","classy","clean","clear","clever","cloistered","cloudy","closed","clumsy","cluttered","coherent","cold","colorful","colossal","combative","comfortable","common","complete","complex","concerned","condemned","confused","conscious","cooing","cool","cooperative","coordinated","courageous","cowardly","crabby","craven","crazy","creepy","crooked","crowded","cruel","cuddly","cultured","cumbersome","curious","curly","curved","curvy","cut","cute","cute","cynical","daffy","daily","damaged","damaging","damp","dangerous","dapper","dark","dashing","dazzling","dead","deadpan","deafening","dear","debonair","decisive","decorous","deep","deeply","defeated","defective","defiant","delicate","delicious","delightful","demonic","delirious","dependent","depressed","deranged","descriptive","deserted","detailed","determined","devilish","didactic","different","difficult","diligent","direful","dirty","disagreeable","disastrous","discreet","disgusted","disgusting","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","draconian","dramatic","dreary","drunk","dry","dull","dusty","dynamic","dysfunctional","eager","early","earsplitting","earthy","easy","eatable","economic","educated","efficacious","efficient","eight","elastic","elated","elderly","electric","elegant","elfin","elite","embarrassed","eminent","empty","enchanted","enchanting","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","envious","equable","equal","erect","erratic","ethereal","evanescent","evasive","even excellent excited","exciting exclusive","exotic","expensive","extra-large extra-small exuberant","exultant","fabulous","faded","faint fair","faithful","fallacious","false familiar famous","fanatical","fancy","fantastic","far"," far-flung"," fascinated","fast","fat faulty","fearful fearless","feeble feigned","female fertile","festive","few fierce","filthy","fine","finicky","first"," five"," fixed"," flagrant","flaky","flashy","flat","flawless","flimsy"," flippant","flowery","fluffy","fluttering"," foamy","foolish","foregoing","forgetful","fortunate","four frail","fragile","frantic","free"," freezing"," frequent"," fresh"," fretful","friendly","frightened frightening full fumbling functional","funny","furry furtive","future futuristic","fuzzy ","gabby","gainful","gamy","gaping","garrulous","gaudy","general gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful gratis","gray greasy great","greedy","green grey grieving","groovy","grotesque","grouchy","grubby gruesome","grumpy","guarded","guiltless","gullible gusty","guttural H habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly heavy hellish","helpful","helpless","hesitant","hideous high","highfalutin","high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical","icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","illustrious","imaginary","immense","imminent","impartial","imperfect","impolite","important","imported","impossible","incandescent","incompetent","inconclusive","industrious","incredible","inexpensive","infamous","innate","innocent","inquisitive","insidious","instinctive","intelligent","interesting","internal","invincible","irate","irritating","itchy","jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile","kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known","labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical","macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious","naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty","oafish","obedient","obeisant","obese","obnoxious","obscene","obsequious","observant","obsolete","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","onerous","open","opposite","optimal","orange","ordinary","organic","ossified","outgoing","outrageous","outstanding","oval","overconfident","overjoyed","overrated","overt","overwrought","painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","profuse","protective","proud","psychedelic","psychotic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling","quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical","rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless","sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy","smooth","sneaky","snobbish","snotty","soft","soggy","solid","somber","sophisticated","sordid","sore","sore","sour","sparkling","special","spectacular","spicy","spiffy","spiky","spiritual","spiteful","splendid","spooky","spotless","spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous","taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender tense","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical","ubiquitous","ugliest","ugly","ultra","unable","unaccountable","unadvised","unarmed","unbecoming","unbiased","uncovered","understood","undesirable","unequal","unequaled","uneven","unhealthy","uninterested","unique","unkempt","unknown","unnatural","unruly","unsightly","unsuitable","untidy","unused","unusual","unwieldy","unwritten","upbeat","uppity","upset","uptight","used","useful","useless","utopian","utter","uttermost","vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar","wacky","waggish","waiting","","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","wealthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry","xenophobic","yellow","yielding","young","youthful","yummy","zany","zealous","zesty","zippy","zonked"];

   let numberOfAdjectives = document.getElementById("select-amount").value;

    //collects each select word from each loop and puts them into one array, which is then joined into a single string 
    let selectedWordsArray = [];
    for (i = 0; i < numberOfAdjectives; i++) {
        selectedWordsArray.push(adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)])
    }

    adjectiveMeaningInput.value = selectedWordsArray.join(" ");

}

//randomly generates a verb root for "to be"
function generateCopula() {
    let copulaInput = document.getElementById("inputToBe");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        copulaInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        copulaInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        copulaInput.value = CVC;

    } else if(randomNum === 3 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        copulaInput.value = CVCV;

    } 

}

//randomly generates roots according to the root structure, as well as assigning them randomly selected meanings
function generateVerbs() {
    let verbInput = document.getElementById("inputRootVerb");
    let randomVerbArray = [] 

    let numberOfVerbs = document.getElementById("select-amount").value;
    numberOfVerbs = Number(numberOfVerbs);
    
    for(i = 0; i < numberOfVerbs; i++) {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            randomVerbArray.push(CV)

        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            randomVerbArray.push(CVC)

        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            randomVerbArray.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            randomVerbArray.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            randomVerbArray.push(CVCC)

        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            randomVerbArray.push(CVCCV)
        }
    }


    //collects each generated word from each loop and puts them into one array, which is then joined into a single string 
    let generatedWordsArray = [];
    for (i = 0; i < numberOfVerbs; i++) {
        generatedWordsArray.push(randomVerbArray[i])
    }

    verbInput.value = generatedWordsArray.join(" ");
}

//randomly selects meanings for the randomly generated verbs
function generateVerbMeanings() {
    let verbMeaningInput = document.getElementById("inputMeaningVerb");

    let numberOfVerbMeanings = document.getElementById("select-amount").value;

    //collects each select word from each loop and puts them into one array, which is then joined into a single string 
    let selectedWordsArray = [];
    for (i = 0; i < numberOfVerbMeanings; i++) {
        selectedWordsArray.push(verbArray[Math.floor(Math.random() * verbArray.length)])
    }

    verbMeaningInput.value = selectedWordsArray.join(" ");
}

//randomly generates a Nominaliser suffix
function generateNominaliser() {
    let nominaliserInput = document.getElementById("inputNominaliser");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        nominaliserInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        nominaliserInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        nominaliserInput.value = CVC;

    } 


}

//randomly generates a word for "also"
function generateAlso() {
    let alsoInput = document.getElementById("inputAlso");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        alsoInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        alsoInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        alsoInput.value = CVC;
    } 


}

//randomly generates a word for "also"
function generateAgain() {
    let againInput = document.getElementById("inputAgain");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        againInput.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        againInput.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        againInput.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        againInput.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        againInput.value = CVCCV;
    }


}

//randomly generates a word for "place"
function generatePlace() {
    let placeInput = document.getElementById("inputPlace");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        placeInput.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        placeInput.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        placeInput.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        placeInput.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        placeInput.value = CVCCV;
    }


}

//randomly generates a word for "man"
function generateMan() {
    let inputMan = document.getElementById("inputMan");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        inputMan.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        inputMan.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        inputMan.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        inputMan.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        inputMan.value = CVCCV;
    }


}

//randomly generates a word for "path"
function generatePath() {
    let inputPath = document.getElementById("inputPath");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        inputPath.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        inputPath.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        inputPath.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        inputPath.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        inputPath.value = CVCCV;
    }


}

//randomly generates a word for "path"
function generateOrigin() {
    let inputOrigin = document.getElementById("inputOrigin");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        inputOrigin.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        inputOrigin.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        inputOrigin.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        inputOrigin.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        inputOrigin.value = CVCCV;
    }


}

//randomly generates a word for "time"
function generateTime() {
    let inputTime = document.getElementById("inputTime");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        inputTime.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        inputTime.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        inputTime.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        inputTime.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        inputTime.value = CVCCV;
    }


}


//randomly generates a word for "here"
function generateHere() {
    let hereInput = document.getElementById("inputHere");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        hereInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        hereInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        hereInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        hereInput.value = V;
    } 


}

//randomly generates a word for "there"
function generateThere() {
    let thereInput = document.getElementById("inputThere");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        thereInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        thereInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        thereInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        thereInput.value = V;
    } 


}

//randomly generates an adverbial suffix
function generateAdverbialSuffix() {
    let adverbialSuffixInput = document.getElementById("inputAdverbialSuffix");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        adverbialSuffixInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        adverbialSuffixInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        adverbialSuffixInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        adverbialSuffixInput.value = V;
    } 


}

//randomly generates an first person pronoun
function generateFirstPersonPronoun() {
    let FirstPersonPronounInput = document.getElementById("first-person-pronoun");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        FirstPersonPronounInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        FirstPersonPronounInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        FirstPersonPronounInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        FirstPersonPronounInput.value = V;
    } 


}

//randomly generates an second person pronoun
function generateSecondPersonPronoun() {
    let SecondPersonPronounInput = document.getElementById("second-person-pronoun");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        SecondPersonPronounInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        SecondPersonPronounInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        SecondPersonPronounInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        SecondPersonPronounInput.value = V;
    } 


}

//randomly generates an non-past suffix
function generateNonPastSuffix() {
    let nonPastSuffixInput = document.getElementById("non-past");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        nonPastSuffixInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        nonPastSuffixInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        nonPastSuffixInput.value = V;
    } 


}