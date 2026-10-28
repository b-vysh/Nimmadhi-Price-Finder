import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MATTRESS_DATA, STANDARD_SIZES } from '../data/mattresses';
import { TOPPER_DATA } from '../data/toppers';
import { SLIMBED_DATA } from '../data/slimbeds';
import { PROTECTOR_DATA } from '../data/protectors';
import { PILLOW_DATA } from '../data/pillows';
import { BEDSPREAD_DATA } from '../data/bedspreads';
import { Moon, Sun, Menu, X, ChevronDown, Check } from 'lucide-react';

const DISCOUNTS = [0, 10, 20, 30, 40, 50];
type UnitType = 'feet' | 'inches' | 'metric';
type TabType = 'mattress' | 'topper' | 'slimbed' | 'protector' | 'pillow' | 'bedspread';

interface CategoryOption {
  id: TabType;
  label: string;
  icon: string;
  subtitle: string;
}

const CATEGORIES: CategoryOption[] = [
  { id: 'mattress', label: 'Mattresses', icon: '🛏️', subtitle: 'Standard & Premium Mattresses' },
  { id: 'topper', label: 'Mattress Toppers', icon: '☁️', subtitle: 'Memory, Latex & PU 2" Toppers' },
  { id: 'slimbed', label: 'Slim & Folding Beds', icon: '🛌', subtitle: 'Foam Slimbeds & Folding Beds' },
  { id: 'protector', label: 'Waterproof Protectors', icon: '🛡️', subtitle: '12" PRO Fitted Protectors' },
  { id: 'pillow', label: 'Pillows', icon: '🪶', subtitle: 'Micro, Foam, Latex & Memory Pillows' },
  { id: 'bedspread', label: 'Bed Spreads & Comforter', icon: '✨', subtitle: 'Bed Spreads, 7D Prints & Comforters' },
];

const PriceFinder = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('mattress');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [unit, setUnit] = useState<UnitType>('feet');
  const [discount, setDiscount] = useState<number>(0);
  const [extraDiscounts, setExtraDiscounts] = useState<number[]>([]);
  const [modelSearch, setModelSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') !== 'light'
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const toggleTheme = () => setIsDark(!isDark);

  const currentDataset = 
    activeTab === 'mattress' ? MATTRESS_DATA : 
    activeTab === 'topper' ? TOPPER_DATA : 
    activeTab === 'slimbed' ? SLIMBED_DATA :
    activeTab === 'protector' ? PROTECTOR_DATA : [];

  const currentModel = currentDataset.find((m) => m.id === selectedModel);
  const currentSize = currentModel?.sizes.find((s) => s.sizeId === selectedSize);

  const currentCategory = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0];

  const getSizeDisplay = (sizeId: string) => {
    const sizeData = STANDARD_SIZES[sizeId];
    if (!sizeData) return sizeId;

    switch (unit) {
      case 'inches':
        return sizeData.inchesDisplay;
      case 'metric':
        return sizeData.metricDisplay;
      case 'feet':
      default:
        return sizeData.feetDisplay;
    }
  };

  const filteredModels = currentDataset.filter((model) => {
    const fullName = `${model.name} ${model.category || ''}`.toLowerCase();
    return fullName.includes(modelSearch.toLowerCase());
  });

  const filteredPillows = PILLOW_DATA.filter((item) =>
    item.name.toLowerCase().includes(modelSearch.toLowerCase())
  );

  const filteredBedSpreads = BEDSPREAD_DATA.filter((item) =>
    `${item.name} ${item.category} ${item.size} ${item.pillowCovers}`
      .toLowerCase()
      .includes(modelSearch.toLowerCase())
  );

  const handleTabChange = (newTab: TabType) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
      setSelectedModel(newTab === 'protector' ? 'water-proof-protector' : '');
      setSelectedSize('');
      setDiscount(0);
      setExtraDiscounts([]);
      setModelSearch('');
    }
    setIsDropdownOpen(false);
    setIsDrawerOpen(false);
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'mattress':
        return 'Mattress';
      case 'topper':
        return 'Topper';
      case 'slimbed':
        return 'Slim / Folding Bed';
      case 'protector':
        return 'Protector';
      default:
        return 'Options';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-[#181a43] dark:via-[#111330] dark:to-[#0a0b1d] transition-colors duration-300">
      {/* Top Navbar */}
      <nav className="bg-blue-900 dark:bg-transparent dark:border-b dark:border-[#78ba44]/20 text-white px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center shadow-md dark:backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 -ml-1 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors flex items-center gap-1.5 focus:outline-none shrink-0"
            aria-label="Open Category Menu"
          >
            <Menu size={22} className="text-[#78ba44]" />
            <span className="font-bold text-sm tracking-wide hidden sm:inline">Menu</span>
          </button>
          <h1 className="text-base sm:text-xl font-bold dark:text-[#78ba44] truncate">
            Nimmadhi Price Finder
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} className="text-[#78ba44]" /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleLogout}
            className="bg-blue-800 dark:bg-white/10 hover:bg-blue-700 dark:hover:bg-white/20 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Slide-over Side Drawer Menu */}
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 w-[85vw] max-w-xs bg-white dark:bg-[#111330] shadow-2xl z-50 flex flex-col justify-between border-r dark:border-[#78ba44]/30 animate-in slide-in-from-left duration-200">
            <div className="overflow-y-auto">
              <div className="p-4 border-b dark:border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white">Price Categories</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Select product type to view prices</p>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-300 active:scale-95"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-3 space-y-1.5">
                {CATEGORIES.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleTabChange(cat.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-all ${
                        isActive
                          ? 'bg-blue-600 dark:bg-[#78ba44] text-white font-bold shadow-md'
                          : 'hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{cat.icon}</span>
                        <div>
                          <div className="text-sm font-semibold">{cat.label}</div>
                          <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-400 dark:text-gray-500'}`}>
                            {cat.subtitle}
                          </div>
                        </div>
                      </div>
                      {isActive && <Check size={18} />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-4 border-t dark:border-white/10 text-center text-xs text-gray-400">
              Nimmadhi Sleep Solutions
            </div>
          </aside>
        </>
      )}

      <main className="max-w-4xl mx-auto p-3 sm:p-6 lg:p-8">
        {/* Category Menu Selector */}
        <div className="relative mb-5 sm:mb-6">
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
            Selected Category
          </label>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between p-3 sm:p-4 bg-white dark:bg-[#181a43]/60 dark:backdrop-blur-xl border border-gray-200 dark:border-[#78ba44]/30 rounded-xl shadow-md text-left transition-all hover:border-[#78ba44] active:scale-[0.99]"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl shrink-0">{currentCategory.icon}</span>
              <div className="truncate">
                <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white truncate">
                  {currentCategory.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {currentCategory.subtitle}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
              <span className="text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-md bg-blue-50 dark:bg-[#78ba44]/20 text-blue-700 dark:text-[#78ba44] border border-blue-200 dark:border-[#78ba44]/30">
                Menu ▾
              </span>
              <ChevronDown
                className={`transition-transform duration-200 text-gray-500 dark:text-gray-400 ${
                  isDropdownOpen ? 'rotate-180 text-[#78ba44]' : ''
                }`}
                size={20}
              />
            </div>
          </button>

          {/* Dropdown Menu List */}
          {isDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsDropdownOpen(false)} 
              />
              <div className="absolute z-20 left-0 right-0 mt-2 max-h-[65vh] overflow-y-auto bg-white dark:bg-[#111330] border border-gray-200 dark:border-[#78ba44]/30 rounded-xl shadow-2xl py-1 divide-y divide-gray-100 dark:divide-white/5 animate-in fade-in duration-100">
                {CATEGORIES.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleTabChange(cat.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 sm:py-3.5 text-left transition-colors ${
                        isActive
                          ? 'bg-blue-50 dark:bg-[#78ba44]/20 text-blue-900 dark:text-[#78ba44] font-bold'
                          : 'hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-2xl shrink-0">{cat.icon}</span>
                        <div className="truncate">
                          <div className="text-sm font-semibold truncate">{cat.label}</div>
                          <div className="text-xs text-gray-400 dark:text-gray-500 truncate">{cat.subtitle}</div>
                        </div>
                      </div>
                      {isActive && <Check className="text-[#78ba44] shrink-0 ml-2" size={20} />}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* PILLOWS VIEW */}
        {activeTab === 'pillow' && (
          <div className="bg-white dark:bg-[#181a43]/40 dark:backdrop-blur-xl dark:border dark:border-[#78ba44]/20 rounded-xl shadow-xl p-4 sm:p-6 mb-6 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b dark:border-white/10 pb-4 mb-4">
              <h2 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">
                Pillows Price List
              </h2>
              <input
                type="text"
                placeholder="Search pillows..."
                className="w-full sm:w-64 bg-white dark:bg-[#111330] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-lg shadow-sm p-2.5 text-base sm:text-sm focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors"
                value={modelSearch}
                onChange={(e) => setModelSearch(e.target.value)}
              />
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-white/10 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10">
                <thead className="bg-gray-50 dark:bg-[#78ba44]/10">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                      Pillow Variety / Model
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-right text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                      Price (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-transparent divide-y divide-gray-200 dark:divide-white/10">
                  {filteredPillows.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200">
                        {item.name}
                      </td>
                      <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm sm:text-base font-bold text-right text-blue-900 dark:text-white">
                        ₹{item.price.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                  {filteredPillows.length === 0 && (
                    <tr>
                      <td colSpan={2} className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                        No pillows found matching "{modelSearch}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* BED SPREADS & COMFORTERS VIEW */}
        {activeTab === 'bedspread' && (
          <div className="bg-white dark:bg-[#181a43]/40 dark:backdrop-blur-xl dark:border dark:border-[#78ba44]/20 rounded-xl shadow-xl p-4 sm:p-6 mb-6 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b dark:border-white/10 pb-4 mb-4">
              <h2 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">
                Bed Spreads & Comforter Price List
              </h2>
              <input
                type="text"
                placeholder="Search bed spread, comforter..."
                className="w-full sm:w-64 bg-white dark:bg-[#111330] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-lg shadow-sm p-2.5 text-base sm:text-sm focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors"
                value={modelSearch}
                onChange={(e) => setModelSearch(e.target.value)}
              />
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-white/10 shadow-sm">
              <table className="min-w-[560px] sm:min-w-full divide-y divide-gray-200 dark:divide-white/10">
                <thead className="bg-gray-50 dark:bg-[#78ba44]/10">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                      Item / Model
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                      Pillow Covers
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-right text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                      Price (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-transparent divide-y divide-gray-200 dark:divide-white/10">
                  {filteredBedSpreads.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                        {item.name}
                      </td>
                      <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-xs font-semibold">
                        <span className={`px-2 py-0.5 rounded-full ${
                          item.category === '7D Print'
                            ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                            : item.category === 'Comforter'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                            : 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-[#78ba44]'
                        }`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 font-mono">
                        {item.size}
                      </td>
                      <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {item.pillowCovers}
                      </td>
                      <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm sm:text-base font-bold text-right text-blue-900 dark:text-white">
                        ₹{item.price.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                  {filteredBedSpreads.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                        No items found matching "{modelSearch}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MATTRESS, TOPPER, SLIMBED & PROTECTOR VIEW */}
        {activeTab !== 'pillow' && activeTab !== 'bedspread' && (
          <>
            <div className="bg-white dark:bg-[#181a43]/40 dark:backdrop-blur-xl dark:border dark:border-[#78ba44]/20 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 transition-colors duration-300">
              <h2 className="text-base sm:text-lg font-bold mb-4 border-b dark:border-white/10 pb-2 text-gray-800 dark:text-white">
                Select {getTabTitle()} Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Model Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    {getTabTitle()} Model
                  </label>
                  <input
                    type="text"
                    placeholder={`Search ${getTabTitle().toLowerCase()} model...`}
                    className="w-full bg-white dark:bg-[#111330] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-lg shadow-sm p-2.5 text-base sm:text-sm focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors mb-2"
                    value={modelSearch}
                    onChange={(e) => setModelSearch(e.target.value)}
                  />
                  <select
                    className="w-full bg-white dark:bg-[#111330] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-lg shadow-sm p-2.5 text-base sm:text-sm focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors"
                    value={selectedModel}
                    onChange={(e) => {
                      setSelectedModel(e.target.value);
                      setSelectedSize(''); // Reset size when model changes
                      setDiscount(0);      // Reset base discount
                      setExtraDiscounts([]); // Reset extra discount
                    }}
                  >
                    <option value="">-- Select a Model --</option>
                    {filteredModels.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.name} {model.category ? `(${model.category})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Unit Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Display Unit</label>
                  <div className="flex flex-wrap gap-4 pt-1 sm:pt-2">
                    <label className="flex items-center text-gray-800 dark:text-gray-200 cursor-pointer py-1 hover:opacity-80 transition-opacity">
                      <input type="radio" className="mr-2 h-4 w-4 text-blue-600 dark:text-[#78ba44] focus:ring-[#78ba44]" name="unit" checked={unit === 'feet'} onChange={() => setUnit('feet')} /> Feet
                    </label>
                    <label className="flex items-center text-gray-800 dark:text-gray-200 cursor-pointer py-1 hover:opacity-80 transition-opacity">
                      <input type="radio" className="mr-2 h-4 w-4 text-blue-600 dark:text-[#78ba44] focus:ring-[#78ba44]" name="unit" checked={unit === 'inches'} onChange={() => setUnit('inches')} /> Inches
                    </label>
                    <label className="flex items-center text-gray-800 dark:text-gray-200 cursor-pointer py-1 hover:opacity-80 transition-opacity">
                      <input type="radio" className="mr-2 h-4 w-4 text-blue-600 dark:text-[#78ba44] focus:ring-[#78ba44]" name="unit" checked={unit === 'metric'} onChange={() => setUnit('metric')} /> MM
                    </label>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Available Sizes</label>
                  <select
                    className="w-full bg-white dark:bg-[#111330] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-lg shadow-sm p-2.5 text-base sm:text-sm focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors disabled:opacity-50"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    disabled={!selectedModel}
                  >
                    <option value="">-- Select a Size --</option>
                    {currentModel?.sizes.map((size) => (
                      <option key={size.sizeId} value={size.sizeId}>
                        {getSizeDisplay(size.sizeId)}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Discount Selection - Only for Mattresses */}
                {activeTab === 'mattress' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Apply Discount</label>
                    <div className="flex gap-2 flex-wrap items-center">
                      <select
                        className="flex-1 min-w-[120px] bg-white dark:bg-[#111330] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-lg shadow-sm p-2.5 text-base sm:text-sm focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        value={discount}
                        onChange={(e) => {
                          setDiscount(Number(e.target.value));
                          setExtraDiscounts([]);
                        }}
                        disabled={!selectedSize}
                      >
                        {DISCOUNTS.map((d) => (
                          <option key={d} value={d}>
                            {d === 0 ? 'No Discount' : `${d}% Off`}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => setExtraDiscounts((prev) => [...prev, 5])}
                        className="bg-[#78ba44] hover:bg-[#65a037] active:scale-95 text-white px-3.5 py-2.5 rounded-lg font-bold text-sm transition-all whitespace-nowrap shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Add additional 5% discount"
                        disabled={!selectedSize}
                      >
                        + 5%
                      </button>
                      <button
                        type="button"
                        onClick={() => setExtraDiscounts((prev) => [...prev, 3])}
                        className="bg-[#78ba44] hover:bg-[#65a037] active:scale-95 text-white px-3.5 py-2.5 rounded-lg font-bold text-sm transition-all whitespace-nowrap shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Add additional 3% discount"
                        disabled={!selectedSize}
                      >
                        + 3%
                      </button>
                      {extraDiscounts.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setExtraDiscounts([])}
                          className="bg-red-500 hover:bg-red-600 active:scale-95 text-white px-3.5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Reset extra discount"
                          disabled={!selectedSize}
                        >
                          Reset
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Results Display */}
            {currentSize && (
              <div className="bg-white dark:bg-[#181a43]/40 dark:backdrop-blur-xl dark:border dark:border-[#78ba44]/20 rounded-xl shadow-xl p-4 sm:p-6 mb-6 transition-colors duration-300">
                <h3 className="text-base sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  {activeTab === 'protector' ? 'Protector Price' : 'Prices by Thickness'}
                </h3>
                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-white/10 shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10">
                    <thead className="bg-gray-50 dark:bg-[#78ba44]/10">
                      <tr>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                          {activeTab === 'protector' ? 'Height / Depth' : 'Thickness'}
                        </th>
                        {discount === 0 && extraDiscounts.length === 0 ? (
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">Price (₹)</th>
                        ) : (
                          <>
                            <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">Original (₹)</th>
                            <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">{discount === 0 ? 'Base' : `${discount}%`} (₹)</th>
                            {extraDiscounts.length > 0 && (
                              <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                                {discount}% {extraDiscounts.map(d => `+ ${d}%`).join(' ')} (₹)
                              </th>
                            )}
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-transparent divide-y divide-gray-200 dark:divide-white/10">
                      {currentSize.thicknessPrices.map((tp, idx) => {
                        const discountedPrice = tp.price * (1 - discount / 100);
                        let finalExtraPrice = discountedPrice;
                        extraDiscounts.forEach(ed => {
                          finalExtraPrice = finalExtraPrice * (1 - ed / 100);
                        });

                        return (
                          <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200">
                              {tp.thicknessInches}" {activeTab === 'protector' ? 'PRO' : ''}
                            </td>
                            {discount === 0 && extraDiscounts.length === 0 ? (
                              <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm sm:text-base font-bold text-blue-900 dark:text-white">
                                ₹{tp.price.toLocaleString('en-IN')}
                              </td>
                            ) : (
                              <>
                                <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm sm:text-base text-gray-500 dark:text-gray-400 line-through">
                                  ₹{tp.price.toLocaleString('en-IN')}
                                </td>
                                <td className={`px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm sm:text-base font-bold ${extraDiscounts.length > 0 ? 'text-gray-500 dark:text-gray-400 line-through' : 'text-green-600 dark:text-[#78ba44]'}`}>
                                  ₹{discountedPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                </td>
                                {extraDiscounts.length > 0 && (
                                  <td className="px-3 sm:px-6 py-3.5 whitespace-nowrap text-sm sm:text-base font-bold text-green-600 dark:text-[#78ba44]">
                                    ₹{finalExtraPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                  </td>
                                )}
                              </>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="text-center py-6 sm:py-8 text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">
        Made with ❤️ by VYSH 👑
      </footer>
    </div>
  );
};

export default PriceFinder;
