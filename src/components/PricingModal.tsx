import React, { useState } from 'react';
import { X, Check, Star, Users, School, Coins, CreditCard } from 'lucide-react';

interface PricingModalProps {
  onClose: () => void;
  onSelectPlan: (plan: string) => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ onClose, onSelectPlan }) => {
  const [selectedPlan, setSelectedPlan] = useState<'payper' | 'family' | 'school'>('family');

  const plans = [
    {
      id: 'payper',
      name: 'Pay-per-Use',
      price: 'KES 5-10',
      period: 'per question',
      icon: Coins,
      color: 'orange',
      description: 'Perfect for occasional homework help',
      features: [
        'Pay only for what you use',
        'No monthly commitment',
        'Instant access to AI tutor',
        'All subjects covered',
        'Voice and image support',
        'Grade-appropriate responses'
      ]
    },
    {
      id: 'family',
      name: 'Family Plan',
      price: 'KES 500',
      period: 'per month',
      icon: Users,
      color: 'green',
      description: 'Best value for families with multiple children',
      features: [
        'Unlimited questions',
        'Up to 5 children',
        'All grade levels (1-9)',
        'Priority support',
        'Voice and image support',
        'Progress tracking',
        'Offline access to explanations',
        'Family dashboard'
      ],
      popular: true
    },
    {
      id: 'school',
      name: 'School Partnership',
      price: 'Custom',
      period: 'pricing',
      icon: School,
      color: 'blue',
      description: 'For schools and educational institutions',
      features: [
        'Unlimited access for all students',
        'Teacher dashboard',
        'Custom curriculum alignment',
        'Analytics and reporting',
        'Training and support',
        'API integration',
        'Bulk user management',
        'White-label option'
      ]
    }
  ];

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  const handleSubscribe = () => {
    if (selectedPlanData) {
      onSelectPlan(selectedPlanData.id);
      alert(`Proceeding to payment for ${selectedPlanData.name} plan`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Choose Your Plan
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Select the plan that best fits your family's needs
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan === plan.id;
              const colorClasses = {
                orange: {
                  border: 'border-orange-500',
                  bg: 'bg-orange-50',
                  iconBg: 'bg-orange-100',
                  iconColor: 'text-orange-600',
                  button: 'bg-orange-600 hover:bg-orange-700',
                  checkColor: 'text-orange-600'
                },
                green: {
                  border: 'border-green-500',
                  bg: 'bg-green-50',
                  iconBg: 'bg-green-100',
                  iconColor: 'text-green-600',
                  button: 'bg-green-600 hover:bg-green-700',
                  checkColor: 'text-green-600'
                },
                blue: {
                  border: 'border-blue-500',
                  bg: 'bg-blue-50',
                  iconBg: 'bg-blue-100',
                  iconColor: 'text-blue-600',
                  button: 'bg-blue-600 hover:bg-blue-700',
                  checkColor: 'text-blue-600'
                }
              };
              
              const colors = colorClasses[plan.color as keyof typeof colorClasses];
              
              return (
                <div
                  key={plan.id}
                  className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? `${colors.border} ${colors.bg}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPlan(plan.id as any)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className={`inline-flex p-3 rounded-full ${colors.iconBg} mb-3`}>
                      <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-gray-600 text-sm">{plan.period}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className={`h-4 w-4 ${colors.checkColor} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      isSelected
                        ? `${colors.button} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {selectedPlanData && (
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedPlanData.name}
                </h3>
                <p className="text-gray-600">
                  {selectedPlanData.price} {selectedPlanData.period}
                </p>
              </div>
              <button
                onClick={handleSubscribe}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>
                  {selectedPlanData.id === 'school' ? 'Contact Sales' : 'Subscribe Now'}
                </span>
              </button>
            </div>
          </div>
        )}

        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>14-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-green-500" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;