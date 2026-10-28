import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MATTRESS_DATA, STANDARD_SIZES } from '../data/mattresses';
import { TOPPER_DATA } from '../data/toppers';
import { PROTECTOR_DATA } from '../data/protectors';
import { PILLOW_DATA } from '../data/pillows';
import { Moon, Sun } from 'lucide-react';

const DISCOUNTS = [0, 10, 20, 30, 40, 50];
type UnitType = 'feet' | 'inches' | 'metric';
type TabType = 'mattress' | 'topper' | 'protector' | 'pillow';

const PriceFinder = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('mattress');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [unit, setUnit] = useState<UnitType>('feet');
  const [discount, setDiscount] = useState<number>(0);
  const [extraDiscounts, setExtraDiscounts] = useState<number[]>([]);
  const [modelSearch, setModelSearch] = useState('');
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
    activeTab === 'protector' ? PROTECTOR_DATA : [];

  const currentModel = currentDataset.find((m) => m.id === selectedModel);
  const currentSize = currentModel?.sizes.find((s) => s.sizeId === selectedSize);

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

  const handleTabChange = (newTab: TabType) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
      setSelectedModel(newTab === 'protector' ? 'water-proof-protector' : '');
      setSelectedSize('');
      setDiscount(0);
      setExtraDiscounts([]);
      setModelSearch('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-[#181a43] dark:via-[#111330] dark:to-[#0a0b1d] transition-colors duration-300">
      <nav className="bg-blue-900 dark:bg-transparent dark:border-b dark:border-[#78ba44]/20 text-white p-4 flex justify-between items-center shadow-md dark:backdrop-blur-md">
        <h1 className="text-xl font-bold dark:text-[#78ba44]">Nimmadhi Price Finder</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} className="text-[#78ba44]" /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleLogout}
            className="bg-blue-800 dark:bg-white/10 hover:bg-blue-700 dark:hover:bg-white/20 px-4 py-2 rounded text-sm font-semibold transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Navigation Tabs */}
        <div className="flex gap-2 sm:gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => handleTabChange('mattress')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all shadow-sm ${
              activeTab === 'mattress'
                ? 'bg-blue-600 dark:bg-[#78ba44] text-white shadow-md'
                : 'bg-white dark:bg-[#181a43]/60 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
            }`}
          >
            <span>🛏️</span> Mattresses
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('topper')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all shadow-sm ${
              activeTab === 'topper'
                ? 'bg-blue-600 dark:bg-[#78ba44] text-white shadow-md'
                : 'bg-white dark:bg-[#181a43]/60 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
            }`}
          >
            <span>☁️</span> Mattress Toppers
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('protector')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all shadow-sm ${
              activeTab === 'protector'
                ? 'bg-blue-600 dark:bg-[#78ba44] text-white shadow-md'
                : 'bg-white dark:bg-[#181a43]/60 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
            }`}
          >
            <span>🛡️</span> Protectors
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('pillow')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all shadow-sm ${
              activeTab === 'pillow'
                ? 'bg-blue-600 dark:bg-[#78ba44] text-white shadow-md'
                : 'bg-white dark:bg-[#181a43]/60 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
            }`}
          >
            <span>🪶</span> Pillows
          </button>
        </div>

        {/* PILLOWS TAB VIEW */}
        {activeTab === 'pillow' ? (
          <div className="bg-white dark:bg-[#181a43]/40 dark:backdrop-blur-xl dark:border dark:border-[#78ba44]/20 rounded-lg shadow-xl p-4 sm:p-6 mb-6 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b dark:border-white/10 pb-4 mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Pillows Price List
              </h2>
              <input
                type="text"
                placeholder="Search pillows..."
                className="w-full sm:w-64 bg-white dark:bg-[#111330] border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-md shadow-sm p-2 border focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors"
                value={modelSearch}
                onChange={(e) => setModelSearch(e.target.value)}
              />
            </div>

            <div className="overflow-x-auto rounded-md border border-gray-200 dark:border-white/10">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10">
                <thead className="bg-gray-50 dark:bg-[#78ba44]/10">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                      Pillow Variety / Model
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-right text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                      Price (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-transparent divide-y divide-gray-200 dark:divide-white/10">
                  {filteredPillows.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-4 sm:px-6 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                        {item.name}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 whitespace-nowrap text-sm font-bold text-right text-blue-900 dark:text-white">
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
        ) : (
          /* MATTRESS, TOPPER & PROTECTOR VIEW */
          <>
            <div className="bg-white dark:bg-[#181a43]/40 dark:backdrop-blur-xl dark:border dark:border-[#78ba44]/20 rounded-lg shadow-xl p-6 mb-6 transition-colors duration-300">
              <h2 className="text-lg font-semibold mb-4 border-b dark:border-white/10 pb-2 text-gray-800 dark:text-white">
                Select {activeTab === 'mattress' ? 'Mattress' : activeTab === 'topper' ? 'Topper' : 'Protector'} Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Model Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {activeTab === 'mattress' ? 'Mattress Type / Model' : activeTab === 'topper' ? 'Topper Type' : 'Protector Type'}
                  </label>
                  <input
                    type="text"
                    placeholder={
                      activeTab === 'mattress' ? 'Search mattress model...' : 
                      activeTab === 'topper' ? 'Search topper...' : 'Search protector...'
                    }
                    className="w-full bg-white dark:bg-[#111330] border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-md shadow-sm p-2 border focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors mb-2"
                    value={modelSearch}
                    onChange={(e) => setModelSearch(e.target.value)}
                  />
                  <select
                    className="w-full bg-white dark:bg-[#111330] border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-md shadow-sm p-2 border focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors"
                    value={selectedModel}
                    onChange={(e) => {
                      setSelectedModel(e.target.value);
                      setSelectedSize(''); // Reset size when model changes
                      setDiscount(0);      // Reset base discount
                      setExtraDiscounts([]); // Reset extra discount
                    }}
                  >
                    <option value="">
                      -- Select a {activeTab === 'mattress' ? 'Model' : activeTab === 'topper' ? 'Topper' : 'Protector'} --
                    </option>
                    {filteredModels.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.name} {model.category ? `(${model.category})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Unit Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Display Unit</label>
                  <div className="flex gap-4 pt-2">
                    <label className="flex items-center text-gray-800 dark:text-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
                      <input type="radio" className="mr-2 text-blue-600 dark:text-[#78ba44] focus:ring-[#78ba44]" name="unit" checked={unit === 'feet'} onChange={() => setUnit('feet')} /> Feet
                    </label>
                    <label className="flex items-center text-gray-800 dark:text-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
                      <input type="radio" className="mr-2 text-blue-600 dark:text-[#78ba44] focus:ring-[#78ba44]" name="unit" checked={unit === 'inches'} onChange={() => setUnit('inches')} /> Inches
                    </label>
                    <label className="flex items-center text-gray-800 dark:text-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
                      <input type="radio" className="mr-2 text-blue-600 dark:text-[#78ba44] focus:ring-[#78ba44]" name="unit" checked={unit === 'metric'} onChange={() => setUnit('metric')} /> MM
                    </label>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Available Sizes</label>
                  <select
                    className="w-full bg-white dark:bg-[#111330] border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-md shadow-sm p-2 border focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors disabled:opacity-50"
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Apply Discount</label>
                    <div className="flex gap-2 flex-wrap">
                      <select
                        className="flex-1 bg-white dark:bg-[#111330] border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-md shadow-sm p-2 border focus:ring-2 focus:ring-[#78ba44] focus:border-transparent outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                        className="bg-[#78ba44] hover:bg-[#65a037] text-white px-3 py-2 rounded-md font-bold transition-colors whitespace-nowrap shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Add additional 5% discount"
                        disabled={!selectedSize}
                      >
                        + 5%
                      </button>
                      <button
                        type="button"
                        onClick={() => setExtraDiscounts((prev) => [...prev, 3])}
                        className="bg-[#78ba44] hover:bg-[#65a037] text-white px-3 py-2 rounded-md font-bold transition-colors whitespace-nowrap shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Add additional 3% discount"
                        disabled={!selectedSize}
                      >
                        + 3%
                      </button>
                      {extraDiscounts.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setExtraDiscounts([])}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md font-bold transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="bg-white dark:bg-[#181a43]/40 dark:backdrop-blur-xl dark:border dark:border-[#78ba44]/20 rounded-lg shadow-xl p-4 sm:p-6 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {activeTab === 'protector' ? 'Protector Price' : 'Prices by Thickness'}
                </h3>
                <div className="overflow-x-auto rounded-md border border-gray-200 dark:border-white/10">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10">
                    <thead className="bg-gray-50 dark:bg-[#78ba44]/10">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
                          {activeTab === 'protector' ? 'Height / Depth' : 'Thickness'}
                        </th>
                        {discount === 0 && extraDiscounts.length === 0 ? (
                          <th className="px-2 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">Price (₹)</th>
                        ) : (
                          <>
                            <th className="px-2 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">Original (₹)</th>
                            <th className="px-2 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">{discount === 0 ? 'Base' : `${discount}%`} (₹)</th>
                            {extraDiscounts.length > 0 && (
                              <th className="px-2 sm:px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-[#78ba44] uppercase tracking-wider">
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
                            <td className="px-2 sm:px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                              {tp.thicknessInches}" {activeTab === 'protector' ? 'PRO' : ''}
                            </td>
                            {discount === 0 && extraDiscounts.length === 0 ? (
                              <td className="px-2 sm:px-6 py-3 whitespace-nowrap text-sm font-bold text-blue-900 dark:text-white">
                                ₹{tp.price.toLocaleString('en-IN')}
                              </td>
                            ) : (
                              <>
                                <td className="px-2 sm:px-6 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 line-through">
                                  ₹{tp.price.toLocaleString('en-IN')}
                                </td>
                                <td className={`px-2 sm:px-6 py-3 whitespace-nowrap text-sm font-bold ${extraDiscounts.length > 0 ? 'text-gray-500 dark:text-gray-400 line-through' : 'text-green-600 dark:text-[#78ba44]'}`}>
                                  ₹{discountedPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                </td>
                                {extraDiscounts.length > 0 && (
                                  <td className="px-2 sm:px-6 py-3 whitespace-nowrap text-sm font-bold text-green-600 dark:text-[#78ba44]">
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

      <footer className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm font-medium">
        Made with ❤️ by VYSH 👑
      </footer>
    </div>
  );
};

export default PriceFinder;
