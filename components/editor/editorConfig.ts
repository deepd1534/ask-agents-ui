
export const EDITOR_CONFIG = {
  nodeTypes: {
    TECHNICAL: {
      label: 'Technical Node',
      subTypes: [
        { id: 'TABLE', label: 'Table', icon: 'Table' },
        { id: 'COLUMN', label: 'Column', icon: 'Columns' }
      ]
    },
    BUSINESS: {
      label: 'Business Node',
      subTypes: [
        { id: 'ENTITY', label: 'Entity', icon: 'Briefcase' },
        { id: 'METRIC', label: 'Metric', icon: 'Calculator' },
        { id: 'CONCEPT', label: 'Concept', icon: 'Lightbulb' },
        { id: 'RULE', label: 'Rule', icon: 'Gavel' }
      ]
    }
  },
  // Full list of all possible relationships in the system
  relationshipTypes: [
    'HAS_COLUMN', 
    'PRIMARY_KEY', 
    'FOREIGN_KEY', 
    'REFERENCES',
    'MAPPED_TO', 
    'RELATED_TO', 
    'DERIVED_FROM', 
  ],
  // Constraints defining allowed relationships between specific node pairs
  constraints: [
    {
      source: { type: 'TECHNICAL', subType: 'TABLE' },
      target: { type: 'TECHNICAL', subType: 'COLUMN' },
      allowed: ['HAS_COLUMN', 'PRIMARY_KEY', 'FOREIGN_KEY']
    },
    {
      source: { type: 'BUSINESS' },
      // Applies to any target if target is undefined
      allowed: ['MAPPED_TO', 'RELATED_TO', 'DERIVED_FROM']
    }
  ]
};

export const getConstraint = (sourceNode: any, targetNode: any) => {
  if (!sourceNode || !targetNode) return null;

  return EDITOR_CONFIG.constraints.find((c: any) => {
    // Check Source
    const sourceMatch = c.source.type === sourceNode.type && 
        (!c.source.subType || c.source.subType === sourceNode.subType);
    
    // Check Target (if defined in constraint)
    let targetMatch = true;
    if (c.target) {
        targetMatch = c.target.type === targetNode.type && 
            (!c.target.subType || c.target.subType === targetNode.subType);
    }
    
    return sourceMatch && targetMatch;
  });
};
