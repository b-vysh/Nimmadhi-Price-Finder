import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MATTRESS_DATA, STANDARD_SIZES } from '../data/mattresses';

const DISCOUNTS = [0, 10, 20, 30, 40, 50];
type UnitType = 'feet' | 'inches' | 'metric';

const PriceFinder = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [unit, setUnit] = useState<UnitType>('feet');
  const [discount, setDiscount] = useState<number>(0);

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const currentModel = MATTRESS_DATA.find((m) => m.id === selectedModel);
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

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Nimmadhi Price Finder</h1>
        <button
          onClick={handleLogout}
          className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded text-sm font-semibold transition"
        >
          Logout
        </button>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Select Mattress Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Model Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mattress Type / Model</label>
              <select
                className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={selectedModel}
                onChange={(e) => {
                  setSelectedModel(e.target.value);
                  setSelectedSize(''); // Reset size when model changes
                }}
              >
                <option value="">-- Select a Model --</option>
                {MATTRESS_DATA.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name} {model.category ? `(${model.category})` : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Unit Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Display Unit</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" className="mr-2 text-blue-600" name="unit" checked={unit === 'feet'} onChange={() => setUnit('feet')} /> Feet
                </label>
                <label className="flex items-center">
                  <input type="radio" className="mr-2 text-blue-600" name="unit" checked={unit === 'inches'} onChange={() => setUnit('inches')} /> Inches
                </label>
                <label className="flex items-center">
                  <input type="radio" className="mr-2 text-blue-600" name="unit" checked={unit === 'metric'} onChange={() => setUnit('metric')} /> MM
                </label>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Available Sizes</label>
              <select
                className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
            
            {/* Discount Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Apply Discount</label>
              <select
                className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
              >
                {DISCOUNTS.map((d) => (
                  <option key={d} value={d}>
                    {d === 0 ? 'No Discount' : `${d}% Off`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Display */}
        {currentSize && (
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Prices by Thickness</h3>
            <div className="overflow-x-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thickness</th>
                    {discount === 0 ? (
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹)</th>
                    ) : (
                      <>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original (₹)</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final (₹)</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentSize.thicknessPrices.map((tp, idx) => {
                    const finalPrice = tp.price * (1 - discount / 100);
                    return (
                      <tr key={idx}>
                        <td className="px-2 sm:px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{tp.thicknessInches}"</td>
                        {discount === 0 ? (
                          <td className="px-2 sm:px-6 py-3 whitespace-nowrap text-sm font-bold text-gray-900">
                            ₹{tp.price.toLocaleString('en-IN')}
                          </td>
                        ) : (
                          <>
                            <td className="px-2 sm:px-6 py-3 whitespace-nowrap text-sm text-gray-500 line-through">
                              ₹{tp.price.toLocaleString('en-IN')}
                            </td>
                            <td className="px-2 sm:px-6 py-3 whitespace-nowrap text-sm font-bold text-green-600">
                              ₹{finalPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                            </td>
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
      </main>

      <footer className="text-center py-8 text-gray-500 text-sm font-medium">
        Made with ❤️ by VYSH 👑
      </footer>
    </div>
  );
};

export default PriceFinder;
