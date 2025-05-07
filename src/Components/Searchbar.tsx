import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-blue-300 py-2">
      <div className="container mx-auto px-4">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search items"
            className="w-full px-4 py-2 rounded-md pl-10 pr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;