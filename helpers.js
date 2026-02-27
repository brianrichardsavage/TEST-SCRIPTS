// Katalon Global Test Helper Scripts

// === Reusable helper functions ===

// Results per page
storedVars['getResultsPerPage'] = function() {
    var span = document.querySelector('.results-per-page-container span.body--sm');
    return span && span.innerText.trim().startsWith("Select") 
        ? 12 
        : parseInt(span.innerText.match(/\d+/)[0], 10);
};

// All link IDs
storedVars['getAllLinkIds'] = function() {
    return Array.from(document.querySelectorAll('a')).map(a => a.id || null);
};

// Duplicate link IDs
storedVars['getDuplicateLinkIds'] = function(ids) {
    var counts = {};
    ids.forEach(id => { if(id) counts[id] = (counts[id]||0)+1; });
    return Object.keys(counts).filter(id => counts[id] > 1);
};

// Saved filter pills
storedVars['getSavedUVSInventoryFilterPills'] = function() {
    var container = document.querySelector('.filter-pills');
    if (!container) return [];
    return Array.from(container.querySelectorAll('button')).map(btn => btn.innerText.trim());
};

// Vehicle IDs in inventory
storedVars['getInventoryVehicleIDs'] = function() {
    return Array.from(document.querySelectorAll('div.vehicle-card-container div.vehicle-id'))
                .map(div => div.innerText.trim());
};
