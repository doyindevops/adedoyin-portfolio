// build.mjs
import { build } from 'vite';

try {
  await build();
  console.log("✅ Vite build completed successfully.");
} catch (error) {
  console.error("❌ Vite build failed:", error);
  process.exit(1);
}
