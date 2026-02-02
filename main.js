// Mod Data Array
const mods = [
  { name: "Accurate Block Placement", modrinth: "https://modrinth.com/mod/accurate-block-placement", curseforge: "" },
  { name: "Aesthetic and Performant", modrinth: "https://modrinth.com/mod/aesthetic-and-performant", curseforge: "" },
  { name: "Appleskin", modrinth: "https://modrinth.com/mod/appleskin", curseforge: "https://www.curseforge.com/minecraft/mc-mods/appleskin" },
  { name: "Bedrockium", modrinth: "https://modrinth.com/mod/bedrockium", curseforge: "" },
  { name: "Better Biome Blend", modrinth: "https://modrinth.com/mod/better-biome-blend", curseforge: "" },
  { name: "Booster Brightness", modrinth: "https://modrinth.com/mod/booster-brightness", curseforge: "" },
  { name: "BSVSB", modrinth: "https://modrinth.com/mod/bsvsb", curseforge: "" },
  { name: "C2ME", modrinth: "https://modrinth.com/mod/c2me-fabric", curseforge: "https://www.curseforge.com/minecraft/mc-mods/c2me-fabric" },
  { name: "Cloth Config", modrinth: "https://modrinth.com/mod/cloth-config", curseforge: "https://www.curseforge.com/minecraft/mc-mods/cloth-config" },
  { name: "Crypton", modrinth: "https://modrinth.com/mod/crypton", curseforge: "" },
  { name: "Dark Loading Screen", modrinth: "https://modrinth.com/mod/dark-loading-screen", curseforge: "" },
  { name: "Debugify", modrinth: "https://modrinth.com/mod/debugify", curseforge: "https://www.curseforge.com/minecraft/mc-mods/debugify" },
  { name: "Enhanced Block Entities", modrinth: "https://modrinth.com/mod/enhanced-block-entities", curseforge: "https://www.curseforge.com/minecraft/mc-mods/enhanced-block-entities" },
  { name: "Entity Culling", modrinth: "https://modrinth.com/mod/entity-culling", curseforge: "https://www.curseforge.com/minecraft/mc-mods/entity-culling" },
  { name: "Fabric API", modrinth: "https://modrinth.com/mod/fabric-api", curseforge: "https://www.curseforge.com/minecraft/mc-mods/fabric-api" },
  { name: "Fabric Language Kotlin", modrinth: "https://modrinth.com/mod/fabric-language-kotlin", curseforge: "https://www.curseforge.com/minecraft/mc-mods/fabric-language-kotlin" },
  { name: "Fast Chest", modrinth: "https://modrinth.com/mod/fast-chest", curseforge: "" },
  { name: "Fast Items", modrinth: "https://modrinth.com/mod/fast-items", curseforge: "" },
  { name: "FerriteCore", modrinth: "https://modrinth.com/mod/ferritecore", curseforge: "https://www.curseforge.com/minecraft/mc-mods/ferritecore" },
  { name: "Force Close Loading Screen", modrinth: "https://modrinth.com/mod/force-close-loading-screen", curseforge: "" },
  { name: "Freecam Modrinth Edition", modrinth: "https://modrinth.com/mod/freecam", curseforge: "" },
  { name: "Indium", modrinth: "https://modrinth.com/mod/indium", curseforge: "" },
  { name: "LazyDFU", modrinth: "https://modrinth.com/mod/lazydfu", curseforge: "https://www.curseforge.com/minecraft/mc-mods/lazydfu" },
  { name: "Lithium", modrinth: "https://modrinth.com/mod/lithium", curseforge: "https://www.curseforge.com/minecraft/mc-mods/lithium" },
  { name: "Memory Leak Fix", modrinth: "https://modrinth.com/mod/memory-leak-fix", curseforge: "https://www.curseforge.com/minecraft/mc-mods/memory-leak-fix" },
  { name: "Mod Menu", modrinth: "https://modrinth.com/mod/modmenu", curseforge: "https://www.curseforge.com/minecraft/mc-mods/modmenu" },
  { name: "More Culling", modrinth: "https://modrinth.com/mod/more-culling", curseforge: "https://www.curseforge.com/minecraft/mc-mods/more-culling" },
  { name: "Packet Fixer", modrinth: "https://modrinth.com/mod/packet-fixer", curseforge: "" },
  { name: "Reeses Sodium Options", modrinth: "https://modrinth.com/mod/reeses-sodium-options", curseforge: "https://www.curseforge.com/minecraft/mc-mods/reeses-sodium-options" },
  { name: "Server Core", modrinth: "https://modrinth.com/mod/servercore", curseforge: "" },
  { name: "Shulker Box Tooltip", modrinth: "https://modrinth.com/mod/shulkerboxtooltip", curseforge: "https://www.curseforge.com/minecraft/mc-mods/shulkerboxtooltip" },
  { name: "Smoke Suppression", modrinth: "https://modrinth.com/mod/smoke-suppression", curseforge: "" },
  { name: "Smooth Scrolling Everywhere", modrinth: "https://modrinth.com/mod/smooth-scrolling-everywhere", curseforge: "" },
  { name: "Sodium", modrinth: "https://modrinth.com/mod/sodium", curseforge: "https://www.curseforge.com/minecraft/mc-mods/sodium" },
  { name: "Sodium Extra", modrinth: "https://modrinth.com/mod/sodium-extra", curseforge: "https://www.curseforge.com/minecraft/mc-mods/sodium-extra" },
  { name: "Starlight", modrinth: "https://modrinth.com/mod/starlight", curseforge: "https://www.curseforge.com/minecraft/mc-mods/starlight" },
  { name: "Stutterfix", modrinth: "https://modrinth.com/mod/stutterfix", curseforge: "" },
  { name: "Yet Another Config Lib", modrinth: "https://modrinth.com/mod/yacl", curseforge: "https://www.curseforge.com/minecraft/mc-mods/yet-another-config-lib" },
  { name: "Very Many Players", modrinth: "https://modrinth.com/mod/vmp", curseforge: "" },
  { name: "Wraith-Colormeoutlines", modrinth: "https://modrinth.com/mod/colormeoutlines", curseforge: "" },
  { name: "Zoomify", modrinth: "https://modrinth.com/mod/zoomify", curseforge: "" }
];


const modContainer = document.getElementById('modContainer');
const searchInput = document.getElementById('modSearch');

// Function to render mods
function renderMods(filter = "") {
    modContainer.innerHTML = "";
    
    const filteredMods = mods.filter(mod => 
        mod.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredMods.forEach(mod => {
        const card = document.createElement('div');
        card.className = "glass-card p-5 rounded-xl flex flex-col justify-between hover:border-neutral-600 transition-colors group";
        
        card.innerHTML = `
            <h3 class="font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">${mod.name}</h3>
            <div class="flex gap-3">
                ${mod.modrinth ? `<a href="${mod.modrinth}" target="_blank" class="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition">Modrinth</a>` : ''}
                ${mod.curseforge ? `<a href="${mod.curseforge}" target="_blank" class="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded border border-orange-500/20 hover:bg-orange-500/20 transition">CurseForge</a>` : ''}
            </div>
        `;
        modContainer.appendChild(card);
    });
}

// Search Listener
searchInput.addEventListener('input', (e) => {
    renderMods(e.target.value);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMods();
    lucide.createIcons(); // Initialize Icons
});
