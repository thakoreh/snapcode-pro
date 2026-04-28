export const LANGUAGES = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "sql", label: "SQL" },
  { value: "bash", label: "Bash/Shell" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "json", label: "JSON" },
  { value: "yaml", label: "YAML" },
  { value: "markdown", label: "Markdown" },
  { value: "jsx", label: "JSX" },
  { value: "tsx", label: "TSX" },
  { value: "elixir", label: "Elixir" },
  { value: "scala", label: "Scala" },
  { value: "lua", label: "Lua" },
  { value: "r", label: "R" },
  { value: "dart", label: "Dart" },
  { value: "zig", label: "Zig" },
  { value: "haskell", label: "Haskell" },
  { value: "plaintext", label: "Plain Text" },
];

export const THEMES = [
  { value: "github-dark", label: "GitHub Dark" },
  { value: "dracula", label: "Dracula" },
  { value: "monokai", label: "Monokai" },
  { value: "nord", label: "Nord" },
  { value: "one-dark", label: "One Dark" },
  { value: "vs2015", label: "VS 2015" },
  { value: "atom-one-dark", label: "Atom One Dark" },
  { value: "night-owl", label: "Night Owl" },
  { value: "tokyo-night-dark", label: "Tokyo Night" },
  { value: "github-dark-dimmed", label: "GitHub Dimmed" },
  { value: "dark", label: "Dark (Default)" },
  { value: "an-old-hope", label: "An Old Hope" },
  { value: "androidstudio", label: "Android Studio" },
  { value: "arta", label: "Arta" },
  { value: "codepen-embed", label: "CodePen" },
  { value: "gradient-dark", label: "Gradient Dark" },
  { value: "hybrid", label: "Hybrid" },
  { value: "ir-black", label: "IR Black" },
  { value: "isbl-editor-dark", label: "ISBL Editor" },
  { value: "kimbie-dark", label: "Kimbie Dark" },
  { value: "magula", label: "Magula" },
  { value: "nnfx-dark", label: "NNFX Dark" },
  { value: "panda-syntax-dark", label: "Panda" },
  { value: "paraiso-dark", label: "Paraiso" },
  { value: "pojoaque", label: "Pojoaque" },
  { value: "qtcreator-dark", label: "Qt Creator" },
  { value: "rainbow", label: "Rainbow" },
  { value: "shades-of-purple", label: "Shades of Purple" },
  { value: "sunburst", label: "Sunburst" },
  { value: "srcery", label: "Srcery" },
  { value: "stackoverflow-dark", label: "StackOverflow Dark" },
  { value: "ultimate", label: "Ultimate" },
  { value: "vsc-dark-plus", label: "VS Code Dark+" },
  { value: "xonokai", label: "Xonokai" },
];

export const GRADIENT_BACKGROUNDS = [
  { value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", label: "Purple Haze" },
  { value: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", label: "Pink Sunset" },
  { value: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", label: "Ocean Blue" },
  { value: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", label: "Mint Fresh" },
  { value: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", label: "Peach Glow" },
  { value: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", label: "Lavender" },
  { value: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)", label: "Warm Flame" },
  { value: "linear-gradient(135deg, #667eea 0%, #00f2fe 100%)", label: "Cool Breeze" },
  { value: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", label: "Soft Rose" },
  { value: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)", label: "Sky Light" },
  { value: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)", label: "Cotton Candy" },
  { value: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%)", label: "Midnight" },
  { value: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", label: "Deep Ocean" },
  { value: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)", label: "Galaxy" },
  { value: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)", label: "Cosmic" },
  { value: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)", label: "Steel Blue" },
  { value: "#0d1117", label: "GitHub Black" },
  { value: "#1e1e2e", label: "Catppuccin Mocha" },
  { value: "#282a36", label: "Dracula BG" },
  { value: "#2e3440", label: "Nord BG" },
];

export const SAMPLE_CODE: Record<string, string> = {
  javascript: `// Beautiful async data fetching
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }
    
    const user = await response.json();
    console.log(\`Welcome back, \${user.name}!\`);
    
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}`,
  typescript: `// Type-safe event emitter
interface EventMap {
  [key: string]: (...args: any[]) => void;
}

class TypedEmitter<T extends EventMap> {
  private listeners = new Map<keyof T, Set<Function>>();
  
  on<K extends keyof T>(event: K, callback: T[K]): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);
  }
  
  emit<K extends keyof T>(event: K, ...args: any[]): void {
    this.listeners.get(event)?.forEach(fn => fn(...args));
  }
}`,
  python: `# FastAPI endpoint with validation
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class UserCreate(BaseModel):
    name: str
    email: str
    age: int | None = None

@app.post("/users", status_code=201)
async def create_user(user: UserCreate):
    if user.age and user.age < 13:
        raise HTTPException(400, "Must be 13 or older")
    
    db_user = await db.users.insert_one(user.dict())
    return {"id": str(db_user.inserted_id), **user.dict()}`,
  rust: `// Async Rust with error handling
use tokio::try_join;

async fn fetch_dashboard(user_id: u64) -> Result<Dashboard, Error> {
    let (profile, posts, notifications) = try_join!(
        fetch_profile(user_id),
        fetch_posts(user_id),
        fetch_notifications(user_id),
    )?;
    
    Ok(Dashboard {
        profile,
        recent_posts: posts,
        unread_count: notifications.len(),
    })
}`,
  go: `// Go HTTP middleware pattern
func AuthMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")
        if token == "" {
            http.Error(w, "Unauthorized", http.StatusUnauthorized)
            return
        }
        
        claims, err := validateToken(token)
        if err != nil {
            http.Error(w, "Invalid token", http.StatusForbidden)
            return
        }
        
        ctx := context.WithValue(r.Context(), "userID", claims.UserID)
        next.ServeHTTP(w, r.WithContext(ctx))
    })
}`,
};

export const WINDOW_STYLES = [
  { value: "macos", label: "macOS" },
  { value: "windows", label: "Windows" },
  { value: "none", label: "None" },
] as const;

export const FONT_SIZES = [
  { value: "12", label: "12px" },
  { value: "13", label: "13px" },
  { value: "14", label: "14px" },
  { value: "16", label: "16px" },
  { value: "18", label: "18px" },
  { value: "20", label: "20px" },
  { value: "24", label: "24px" },
];

export const PADDING_OPTIONS = [
  { value: "16", label: "Compact (16px)" },
  { value: "32", label: "Normal (32px)" },
  { value: "48", label: "Comfortable (48px)" },
  { value: "64", label: "Spacious (64px)" },
  { value: "80", label: "Maximum (80px)" },
];
